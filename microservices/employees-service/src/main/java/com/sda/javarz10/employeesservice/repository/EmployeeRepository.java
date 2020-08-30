package com.sda.javarz10.employeesservice.repository;

import com.sda.javarz10.shared.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

}
