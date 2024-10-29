import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  listItems = [
    {
      label:"Dashboard",
      icon: "fa-solid fa-chart-pie",
    },
    {
      label: "Products",
      icon: "fa-solid fa-briefcase"
    },
    {
      label: "Category",
      icon: "fa-solid fa-tags"
    },
    {
      label: "Workers",
      icon: "fa-solid fa-people-group"
    },
    {
      label: "Customers",
      icon: "fa-solid fa-users"
    },
    {
      label: "Work Order",
      icon: "fa-solid fa-receipt"
    },
    {
      label: "Prescription",
      icon: "fa-solid fa-eye"
    }
  ];
  @Input()
  isViewSidebar = true;
}
