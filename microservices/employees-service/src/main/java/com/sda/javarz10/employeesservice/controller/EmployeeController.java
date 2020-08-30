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

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable String id) {
        return employeeService.findById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Employee updateEmployeeById(@PathVariable String id, @RequestBody Employee employee) {
        return employeeService.updateById(id, employee);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.create(employee);
    }

    @DeleteMapping("/{id}")
    public Employee deleteEmployeeById(@PathVariable String id) {
        return employeeService.delete(id);
    }
}
