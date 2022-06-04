
export interface MlProductSearchRes {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   MlProduct[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   any[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface MlProduct {
    id:                    string;
    site_id:               SiteID;
    title:                 string;
    seller:                Seller;
    price:                 number;
    prices:                Prices;
    sale_price:            null;
    currency_id:           CurrencyID;
    available_quantity:    number;
    sold_quantity:         number;
    buying_mode:           BuyingMode;
    listing_type_id:       ListingTypeID;
    stop_time:             string;
    condition:             Condition;
    permalink:             string;
    thumbnail:             string;
    thumbnail_id:          string;
    accepts_mercadopago:   boolean;
    installments:          Installments;
    address:               Address;
    shipping:              Shipping;
    seller_address:        SellerAddress;
    attributes:            Attribute[];
    differential_pricing?: DifferentialPricing;
    original_price:        null;
    category_id:           string;
    official_store_id:     null;
    domain_id:             string;
    catalog_product_id:    null;
    tags:                  ResultTag[];
    order_backend:         number;
    use_thumbnail_id:      boolean;
    offer_score:           null;
    offer_share:           null;
    match_score:           null;
    winner_item_id:        null;
    melicoin:              null;
    discounts:             null;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    string;
    city_name:  string;
}

export enum StateID {
    CNGd = "CN-GD",
    CNZj = "CN-ZJ",
    CoAtl = "CO-ATL",
    CoCES = "CO-CES",
    CoDc = "CO-DC",
}

export enum StateName {
    Atlantico = "Atlantico",
    BogotáDC = "Bogotá D.C.",
    Cesar = "Cesar",
    Guangdong = "Guangdong",
    Zhejiang = "Zhejiang",
}

export interface Attribute {
    id:                   ID;
    name:                 Name;
    value_name:           null | string;
    value_struct:         Struct | null;
    attribute_group_name: AttributeGroupName;
    source:               number;
    value_id:             null | string;
    values:               AttributeValue[];
    attribute_group_id:   AttributeGroupID;
}

export enum AttributeGroupID {
    Empty = "",
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Empty = "",
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    ItemCondition = "ITEM_CONDITION",
    Length = "LENGTH",
    Line = "LINE",
    Model = "MODEL",
    PackageLength = "PACKAGE_LENGTH",
    PackageWeight = "PACKAGE_WEIGHT",
    SaleFormat = "SALE_FORMAT",
    UnitsPerPack = "UNITS_PER_PACK",
    UnitsPerPackage = "UNITS_PER_PACKAGE",
    Weight = "WEIGHT",
}

export enum Name {
    CondiciónDelÍtem = "Condición del ítem",
    FormatoDeVenta = "Formato de venta",
    Largo = "Largo",
    LargoDelPaquete = "Largo del paquete",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    Peso = "Peso",
    PesoDelPaquete = "Peso del paquete",
    UnidadesPorEnvase = "Unidades por envase",
    UnidadesPorPack = "Unidades por pack",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    CM = "cm",
    LB = "lb",
}

export interface AttributeValue {
    name:   null | string;
    struct: Struct | null;
    source: number;
    id:     null | string;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Cop = "COP",
    Usd = "USD",
}

export interface DifferentialPricing {
    id: number;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      Price[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: CurrencyID;
}

export interface Price {
    id:                    string;
    type:                  Type;
    amount:                number;
    regular_amount?:       null;
    currency_id:           CurrencyID;
    last_updated:          string;
    conditions:            Conditions;
    exchange_rate_context: ExchangeRateContext;
    metadata?:             Metadata;
    tags?:                 any[];
}

export interface Conditions {
    context_restrictions: ContextRestriction[];
    start_time:           null;
    end_time:             null;
    eligible:             boolean;
}

export enum ContextRestriction {
    ChannelMarketplace = "channel_marketplace",
}

export enum ExchangeRateContext {
    CbtOn = "CBT-ON",
    Default = "DEFAULT",
}

export interface Metadata {
}

export enum Type {
    MinStandard = "min_standard",
    Standard = "standard",
}

export interface Seller {
    id:                 number;
    permalink:          null;
    registration_date:  null;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               null;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          Mode;
    tags:          ShippingTag[];
    logistic_type: LogisticType;
    store_pick_up: boolean;
}

export enum LogisticType {
    DropOff = "drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum ShippingTag {
    MandatoryFreeShipping = "mandatory_free_shipping",
}

export enum SiteID {
    Mco = "MCO",
}

export enum ResultTag {
    CartEligible = "cart_eligible",
    CbtItem = "cbt_item",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    LoyaltyDiscountEligible = "loyalty_discount_eligible",
    PoorQualityPicture = "poor_quality_picture",
}
