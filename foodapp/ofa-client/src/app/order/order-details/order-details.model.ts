export interface OrderDetails {
    customer: number,
    id: number,
    menu: number,
    orderType: string,
    time_of_arrival: Date,
    unit_size: string
}

export interface fullOrderDetails {
    customer_name: string,
    customer_phone: string,
    id: number,
    menu_type: string,
    menu_name: string,
    unit_price: string,
    orderType: string,
    time_of_arrival: Date,
    unit_size: string,
    total_price: number  
}