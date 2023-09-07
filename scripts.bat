@echo off
pushd %~dp0
echo %CD%
call cd frontend\workspace
echo %CD%
    @REM call ng g c pages\add-product --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\add-props --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\attributes-search --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\auth-service --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\basket --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\basketservice --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\categories --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\category-filter --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\dal --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\firebase-connector --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\general-categories-all --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\loading-indicator --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\nodearts-loader --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\payments --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\product --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\products-general --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\products-list --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\productservice --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\search-bar --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\seo-text --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\session-flow --project=ecommerce --module=pages --standalone
    @REM call ng g c pages\tags-search --project=ecommerce --module=pages --standalone

    @REM call ng g s services\product --project=ecommerce
    @REM call ng g s services\DbAbstractionLayer --project=ecommerce
    @REM call ng g s services\Basket --project=ecommerce
    @REM call ng g s services\SessionFlow --project=ecommerce
    @REM call ng g s services\auth-service --project=ecommerce
    @REM call ng g s services\api-connector --project=ecommerce

    @REM call ng g c core\message --project=ecommerce


    @REM call ng g m accounts --project=ecommerce --routing
    @REM call ng g c accounts\login --project=ecommerce --module=accounts
    @REM call ng g c accounts\register --project=ecommerce --module=accounts
    @REM call ng g c accounts\profile --project=ecommerce --module=accounts
    @REM call ng g s accounts\services\auth --project=ecommerce

    @REM call ng g environments --project=ecommerce
    @REM call ng g s core\services\local-storage --project=eco


    @REM New Applications
    @REM call ng generate application eco
    @REM call ng g environments --project=eco
    @REM call ng g m accounts --project=eco --routing
    @REM call ng g s accounts\services\auth --project=eco
    @REM call ng g c accounts\login --project=eco --module=accounts
    @REM call ng g c accounts\register --project=eco --module=accounts
    @REM call ng g c accounts\profile --project=eco --module=accounts

    @REM call ng g m shared\material --project=eco

    @REM call ng g m shared\shared --project=eco
    @REM call ng g c shared\components\item-quantity --project=eco --module=shared
    @REM call ng g c shared\components\simple-page --project=eco --module=shared
    @REM call ng g c shared\components\title --project=eco --module=shared
    @REM call ng g p shared\pipes\word-wrap --project=eco --module=shared
    @REM call ng g s shared\services\http-error-handler --project=eco
    @REM call ng g s shared\services\local-storage --project=eco


    @REM call ng g m products --project=eco --routing
    @REM call ng g s products\services\products --project=eco
    @REM call ng g c products\product --project=eco --module=products
    @REM call ng g c products\add-product --project=eco --module=products
    @REM call ng g c products\product-card --project=eco --module=products
    @REM call ng g c products\add-props --project=eco --module=products
    @REM call ng g c products\categories --project=eco --module=products
    @REM call ng g c products\category-filter --project=eco --module=products
    @REM call ng g c products\products-general --project=eco --module=products

    @REM call ng g m pages --project=eco --routing
    @REM call ng g s pages\services\pages --project=eco
    @REM call ng g s pages\services\navigation-focus --project=eco
    @REM call ng g c pages\navbar --project=eco --module=pages
    @REM call ng g c pages\footer --project=eco --module=pages
    @REM call ng g c pages\cookie-popup --project=eco --module=pages
    @REM call ng g c pages\support --project=eco --module=pages
    @REM call ng g c pages\carousel --project=eco --module=pages

    @REM call ng g c shared\theme-picker --project=eco --inline-template  


    @REM  call ng g m management\management --project=eco --routing
    @REM call ng g s management\services\connector\connector --project=eco
    @REM call ng g s management\services\connector\api --project=eco
    @REM call ng g s management\services\connector\links --project=eco
    @REM call ng g s management\services\connector --project=eco
    @REM call ng g c management\services\connector --project=eco --module=management


    @REM  call ng g m data --project=eco --routing

    @REM @echo off
    @REM set models=address cart country customer-address customer delivery-lead-time line-item order payment-method payment-source paypal-payment price shipment shipping-method sku stock-location
    @REM for %%i in (%models%) do (
    @REM ng generate interface "data/models/%%i" --project=eco
    @REM )

    @REM @echo off
    @REM set services=address cart country customer-address customer delivery-lead-time line-item order paypal-payment shipment sku

    @REM for %%i in (%services%) do (
    @REM ng generate service "data/services/%%i" --project=eco
    @REM )


    @REM :: Generate Core Module
    @REM @REM call ng generate module core --project=eco

    @REM :: Generate EmptyCartGuard
    @REM call ng generate guard core/guards/empty-cart --project=eco

    @REM :: Generate HeaderService
    @REM call ng generate service core/header/header --project=eco

    @REM :: Generate OptionsInterceptor
    @REM call ng generate interceptor core/interceptors/options --project=eco

    @REM :: Generate Core Components
    @REM for %%i in (header error not-found) do (
    @REM ng generate component core/%%i --project=eco
    @REM )

    @REM :: Generate Authentication Services
    @REM for %%i in (authentication session) do (
    @REM ng generate service core/authentication/%%i --project=eco
    @REM )


    @REM call ng g m features/products --project=eco
    @REM call ng g c features/products/pages/product --project=eco
    @REM call ng g c features/products/pages/product-list --project=eco

    @REM call ng g m features/auth --project=eco
    @REM call ng g c features/auth/pages/signup --project=eco
    @REM call ng g c features/auth/pages/login --project=eco

    @REM call ng g m features/cart --project=eco
    @REM call ng g c features/cart/codes --project=eco
    @REM call ng g c features/cart/empty --project=eco
    @REM call ng g c features/cart/summary --project=eco


    @echo off

    @REM :: Generate Checkout Module
    @REM call ng generate module features/checkout --project=eco

    @REM :: Generate Checkout Components
    @REM for %%i in (address address-list country-select) do (
    @REM ng generate component features/checkout/components/%%i --project=eco
    @REM )

    @REM :: Generate Checkout Pages
    @REM for %%i in (billing-address cancel-payment customer payment place-order shipping-address shipping-methods) do (
    @REM ng generate component features/checkout/pages/%%i --project=eco
    @REM )



@REM pause