package com.sda.javarz10.employeesservice.service;

import com.sda.javarz10.employeesservice.exception.InvalidUpdateException;
import com.sda.javarz10.employeesservice.exception.ResourceNotFoundException;
import com.sda.javarz10.employeesservice.repository.EmployeeRepository;
import com.sda.javarz10.shared.model.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class
EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee create(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(String id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Employee with %s not found.", id)));
    }

    public Employee delete(String id) {
        Employee employee = findById(id);
        employeeRepository.deleteById(id);

        return employee;
    }

    public Employee updateById(String id, Employee employee) {
        if (!id.equals(employee.getId())) {
            throw new InvalidUpdateException("Employee id not match!");
        }

        if (!employeeRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format("Employee with %s not found.", id));
        }

        return employeeRepository.save(employee);
    }
}
