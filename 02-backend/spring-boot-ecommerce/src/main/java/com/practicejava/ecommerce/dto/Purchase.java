package com.practicejava.ecommerce.dto;

import com.practicejava.ecommerce.entity.Address;
import com.practicejava.ecommerce.entity.Customer;
import com.practicejava.ecommerce.entity.Order;
import com.practicejava.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address address;
    private Order order;
    private Set<OrderItem> orderItems;

}
