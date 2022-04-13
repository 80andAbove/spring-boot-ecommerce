package com.practicejava.ecommerce.service;

import com.practicejava.ecommerce.dto.PaymentInfo;
import com.practicejava.ecommerce.dto.Purchase;
import com.practicejava.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
