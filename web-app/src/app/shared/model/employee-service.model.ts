export interface EmployeePaginationAndSortResponse {
  content: Employee[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  ON_SICK_LEAVE = 'ON_SICK_LEAVE',
  DISMISSED = 'DISMISSED',
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  email?: string;
  company?: string;
  status?: EmployeeStatus;
  address?: Address;
}

export interface Address {
  street: string;
  buildingNumber: string;
  flatNumber: string;
  city: string;
  postalCode: string;
  country: string;
}