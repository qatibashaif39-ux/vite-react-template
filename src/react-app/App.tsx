// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
      <nav class="bottom-nav">
    <a href="#home" class="nav-item active" data-bs-toggle="tooltip" title="الرئيسية"><i class="fas fa-store"></i></a>
    <a href="#confirm" class="nav-item" data-bs-toggle="tooltip" title="تأكيد الطلب"><i class="fas fa-check-circle"></i></a>
    <a href="#cart" class="nav-item" id="open-cart" data-bs-toggle="tooltip" title="الطلبات">
      <i class="fas fa-shopping-cart"></i>
      <span class="badge" id="cart-count">0</span>
    </a>
  </nav>

  <!-- ترويسة -->
<div id="header"></div>

  <!-- سلايدر -->
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  
  </div>

  <main class="container py-4" id="home">
    <div class="row g-3" id="product-list">
      <!-- element temp come js -->
      <!-- المنتجات تُنشأ عبر جافاسكربت من products[] أدناه -->
    </div>
  </main>

 
  <section class="cart" id="cart">
    <div class="cart-header">
      <h5 class="m-0"><i class="fas fa-shopping-bag"></i> عربة التسوق</h5>
      <button class="btn btn-danger btn-sm" id="close-cart">&times;</button>
    </div>
    <div class="cart-body">
      <div id="cart-items"></div>
      <div class="cart-empty" id="cart-empty" style="display:none">لا توجد منتجات بعد، الرجاء اختيار منتج إلى السلة.</div>
    </div>
    <div class="cart-footer">
      <a href="/confirm-order.html" class="btn btn-custom w-100 class="total-line"><span>تسجيل الطلب</span><span id="subtotal">0</span></a>
      

  
    </div>
  </section>

  <div class="page-bottom-spacer"></div>

  <!-- تنبيه إضافة للسلة (Toast) -->
  <div class="position-fixed bottom-0 start-50 translate-middle-x p-3" style="z-index: 1080;">
    <div id="addedToast" class="toast text-bg-dark border-0" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-body">✅ تم إضافة المنتج إلى السلة</div>
    </div>
  </div>

 
  <div id="cookieNotice" class="cookie-notice">
    <div class="d-flex align-items-center justify-content-between gap-2">
      <div><i class="fa-regular fa-cookie-bite me-2"></i> نستخدم ملفات تعريف الارتباط لتحسين تجربتك.</div>
      <div class="d-flex gap-2">
        <button id="acceptCookies" class="btn btn-sm btn-success">موافق</button>
        <button id="rejectCookies" class="btn btn-sm btn-outline-secondary">رفض</button>
        <a class="btn btn-sm btn-outline-light" href="privacy_policy.html">الخصوصية</a>
        <a class="btn btn-sm btn-outline-light" href="terms_of_service.html">الشروط</a>
      </div>
    </div>
  </div>

 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
 <script src="assets/js/partials.js" ></script>
<script src="assets/js/main.js" defer></script>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </>
  );
}

export default App;
