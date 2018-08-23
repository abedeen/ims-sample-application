package com.ims.application.service.mapper;

import com.ims.application.domain.*;
import com.ims.application.service.dto.OrdersDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Orders and its DTO OrdersDTO.
 */
@Mapper(componentModel = "spring", uses = {StockMapper.class, UsersMapper.class})
public interface OrdersMapper extends EntityMapper<OrdersDTO, Orders> {

    @Mapping(source = "stock.id", target = "stockId")
    @Mapping(source = "users.id", target = "usersId")
    OrdersDTO toDto(Orders orders);

    @Mapping(source = "stockId", target = "stock")
    @Mapping(source = "usersId", target = "users")
    Orders toEntity(OrdersDTO ordersDTO);

    default Orders fromId(Long id) {
        if (id == null) {
            return null;
        }
        Orders orders = new Orders();
        orders.setId(id);
        return orders;
    }
}
