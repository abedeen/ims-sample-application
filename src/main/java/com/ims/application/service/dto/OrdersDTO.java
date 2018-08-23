package com.ims.application.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Orders entity.
 */
public class OrdersDTO implements Serializable {

    private Long id;

    private String sku;

    private Long purchaseQuantity;

    private Long stockId;

    private Long usersId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public Long getPurchaseQuantity() {
        return purchaseQuantity;
    }

    public void setPurchaseQuantity(Long purchaseQuantity) {
        this.purchaseQuantity = purchaseQuantity;
    }

    public Long getStockId() {
        return stockId;
    }

    public void setStockId(Long stockId) {
        this.stockId = stockId;
    }

    public Long getUsersId() {
        return usersId;
    }

    public void setUsersId(Long usersId) {
        this.usersId = usersId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        OrdersDTO ordersDTO = (OrdersDTO) o;
        if (ordersDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ordersDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OrdersDTO{" +
            "id=" + getId() +
            ", sku='" + getSku() + "'" +
            ", purchaseQuantity=" + getPurchaseQuantity() +
            ", stock=" + getStockId() +
            ", users=" + getUsersId() +
            "}";
    }
}
