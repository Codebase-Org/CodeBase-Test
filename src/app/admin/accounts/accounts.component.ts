import {Component, OnInit} from '@angular/core';
import {Iaccount} from "../../interfaces/iaccount";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Iaccount[] = [];
  isDropdownActive: boolean = false;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAccounts();
    this.route.params.subscribe(params => {
      let role = params['role'];
      this.filterAccounts(role);
    })
  }

  showDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  getAccounts() {
    this.api.getAccounts().subscribe(data => {
      this.accounts = data;

      console.log(this.accounts);
    })
  };

  filterAccounts(event: any) {
    let filterArg: Iaccount = event.getAttribute('id');
    console.log(filterArg);

    //let acc = this.accounts.filter(account => account.role === role);
    //console.log(acc);
  }

}
