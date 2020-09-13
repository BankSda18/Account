package com.sda.javarz10.shared.model;

import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document("employees")
@Data
public class Employee {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private String phoneNumber;
    private String email;
    private String company;
    private EmployeeStatus status;
    //   TODO - return initialized object with bull values instead of null
    private Address address;
}
