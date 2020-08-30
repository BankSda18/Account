package com.sda.javarz10.shared.model;

import lombok.Data;

@Data
public class Address {

    private String street;
    private String buildingNumber;
    private String flatNumber;
    private String city;
    private String postalCode;
    private String country;
}
