package com.sda.javarz10.employeesservice.controller;

import com.sda.javarz10.employeesservice.service.EmployeeService;
import com.sda.javarz10.shared.model.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }

    @PostMapping
//    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.create(employee);
    }
}
