package com.practicejava.ecommerce.service;

import com.practicejava.ecommerce.dto.Purchase;
import com.practicejava.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
