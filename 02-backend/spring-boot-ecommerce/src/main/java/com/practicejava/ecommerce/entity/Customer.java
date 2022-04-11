package com.practicejava.ecommerce.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="customer")
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="id")
    private String firstName;

    @Column(name="id")
    private String lastName;

    @Column(name="id")
    private String email;

    @OneToMany(mappedBy="customer", cascade = CascadeType.ALL)
    private Set<Order> orders;

    public void add(Order order){
        if (order != null){
            if(orders == null){
                orders = new HashSet<>();
            }
            order.add(order);
            order.setCustomer(this);
        }
    }
}
