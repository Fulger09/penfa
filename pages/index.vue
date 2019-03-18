<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0 section section-lg">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container">
              <div class="row justify-content-center align-items-center mb-4">
                <div class="col-lg-9 text-center">
                  <p class="lead">Penfa brings brands and certified content creators together, making the discovery of <span class="badge badge-pill badge-secondary">meaningful content</span> easier. Online, curated, secure.</p>
                </div>
              </div>
                  <div class="icons-container2 mt-5">
                    <!-- Center -->
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-12 text-center">
                        <h1 class="display-1">AI-curated Content Delivery
                          <span class="display-3">Empowers brands and creators.</span>
                        </h1>
                        <div class="btn-wrapper pt-4">
                          <a href="#" class="btn btn-default mt-3 mt-md-0">Subscribe for Early Access</a>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-5">
                <div class="card bg-default shadow border-0">
                  <video width="100%" autoplay loop>
                    <source src="static/argon/img/theme/Meeting - 2340.mp4" type="video/mp4" class="card-img-top">
                  </video>
                  <blockquote class="card-blockquote">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                         class="svg-bg">
                      <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                      <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                    </svg>
                    <h2 class="display-3 text-white">Problem Solution</h2>
                    <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                    <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                  </blockquote>
                </div>
              </div>
              <div class="col-lg-7">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-istanbul" type="secondary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-default text-uppercase">High-value #1 for brands</h6>
                  <p class="description mt-3">High-value #1 includes the most important components and features. High-value #1 includes the most important components and features.</p>
                  <div>
                    <badge type="warning" rounded>business</badge>
                    <badge type="warning" rounded>vision</badge>
                    <badge type="warning" rounded>success</badge>
                  </div>
                  <!--<base-button tag="a" href="#" type="" class="mt-4 btn-outline-default">-->
                  <!--Learn more-->
                  <!--</base-button>-->
                </card>
                <div class="mt-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="ni ni-planet" type="secondary" rounded class="mb-4">
                    </icon>
                    <h6 class="text-default text-uppercase">High-value #2 for creators</h6>
                    <p class="description mt-3">High-value #2 includes the most important components and features. High-value #2 includes the most important components and features.</p>
                    <div>
                      <badge type="success" rounded>marketing</badge>
                      <badge type="success" rounded>product</badge>
                      <badge type="success" rounded>launch</badge>
                    </div>
                    <!--<base-button tag="a" href="#" type="" class="mt-4 btn-outline-default">-->
                    <!--Learn more-->
                    <!--</base-button>-->
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-2">
            <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
              <b-carousel id="carousel1"
                          controls
                          indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-src="/argon/img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="/argon/img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
          <div class="col-lg-6 order-md-1 section-nucleo-icons">
            <div class="container" @mouseleave="showIconsAnimation = false">
              <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                <div class="pr-md-5">
                  <h2 class="display-3">Features</h2>
                  <p class="lead">Marketplace and its asset categories. Type of content. Description & info. Marketplace and its asset categories. Type of content. Description & info.</p>
                  <div class="row justify-content-center">
                    <div class="col-lg-2 col-4">
                      <a href="#" target="_blank" data-toggle="tooltip"
                         data-original-title="Text content">
                        <img src="/argon/img/theme/text.png"
                             class="img-fluid opacity-5">
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a href="#" target="_blank" data-toggle="tooltip"
                         data-original-title="Graphic content">
                        <img src="/argon/img/theme/image.png"
                             class="img-fluid opacity-5">
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a href="#" data-toggle="tooltip"
                         data-original-title="Programming">
                        <img src="/argon/img/theme/code.png"
                             class="img-fluid opacity-5">
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a href="#" target="_blank" data-toggle="tooltip"
                         data-original-title="Video content">
                        <img src="/argon/img/theme/video.png"
                             class="img-fluid opacity-5">
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a href="#" target="_blank" data-toggle="tooltip"
                         data-original-title="Photo content">
                        <img src="/argon/img/theme/photo.png"
                             class="img-fluid opacity-5">
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              <div class="row blur--hover">
                <a href="#">
                  <div class="icons-container blur-item mt-4" :class="{'on-screen': showIconsAnimation}">
                    <!-- Center -->
                    <ul class="list-unstyled">
                      <li class="py-2">
                        <div class="d-flex align-items-center">
                          <badge type="warning" circle class="mr-3" icon="ni"></badge>
                          <h6 class="mb-0">AI-matching actors</h6>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="d-flex align-items-center">
                          <badge type="success" circle class="mr-3" icon="ni"></badge>
                          <h6 class="mb-0">Content production and management system</h6>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="d-flex align-items-center">
                          <badge type="default" circle class="mr-3" icon="ni"></badge>
                          <h6 class="mb-0">Marketplace with pre-build assets and CP tools</h6>
                        </div>
                      </li>

                    </ul>
                    <!-- Right 1 -->
                    <!-- Right 2 -->
                    <!-- Left 1 -->
                    <!-- Left 2 -->
                    <i class="icon icon-sm ni ni-briefcase-24 text-warning"></i>
                    <i class="icon icon-sm ni ni-album-2 text-default"></i>
                    <i class="icon ni ni-chart-bar-32 text-success"></i>
                    <i class="icon ni ni-calendar-grid-58 text-success"></i>
                    <i class="icon ni ni-credit-card text-success"></i>
                    <i class="icon icon-sm ni ni-button-play text-default"></i>
                  </div>
                  <span class="blur-hidden h5 text-success text-center">Subscribe for early access to explore more features</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-secondary ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-lg-2 mt-5">
            <div class="d-flex px-3">
              <div class="pl-4">
                <h2 class="display-3 text-default">Creators get</h2>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni" class="badge-success"></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Awesome Support</h5>
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <!--<a href="#" class="text-muted">Learn more</a>-->
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni" class="badge-success"></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Modular Components</h5>
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <!--<a href="#" class="text-muted">Learn more</a>-->
                </div>
              </div>
            </card>
          </div>
          <div class="col-lg-6 order-lg-1 mb-5">
            <div class="d-flex px-3">
              <div class="pl-4">
                <h2 class="display-3 text-default">Brands get</h2>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni" class="badge-warning"></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Awesome Support</h5>
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <!--<a href="#" class="text-muted">Learn more</a>-->
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni" class="badge-warning"></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Modular Components</h5>
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <!--<a href="#" class="text-muted">Learn more</a>-->
                </div>
              </div>
            </card>
          </div>
        </div>
        <div class="mt-5">
          <card gradient="warning"
                no-body
                shadow-size="lg"
                class="border-0">
            <div class="p-5">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <h3 class="text-default">Help us understand what suits your best</h3>
                  <p class="lead text-muted mt-3">Payments, chargebacks, tracked data, fraud protection, content ownership, MP fees and much more.</p>
                  <div class="progress-wrapper pt-3">
                    <div class="progress-info">
                      <div class="progress-label">
                        <span class="text-white bg-default">Transaction fees ~ 5%</span>
                        <span class="text-white bg-default">Penfa fees 15%</span>
                        <span class="text-muted bg-white">You keep 80%</span>
                      </div>
                      <!--<div class="progress-percentage">-->
                      <!--<span>10%</span>-->
                      <!--</div>-->
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-default" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 ml-lg-auto">
                  <base-button tag="a" href="#"
                               type="default" block size="lg">
                    Take 2-min survey
                  </base-button>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 text-center pb-4">
            <h2 class="display-3">Learn more about content creation</h2>
          </div>
          <div class="col-lg-12 row row-grid justify-content-center">
            <div class="col-lg-4">
              <div class="card bg-default shadow border-0">
                <img src="/argon/img/theme/ContentStrategy-1.jpg" alt="asd" class="card-img-top">
                <blockquote class="card-blockquote">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                       class="svg-bg">
                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                  </svg>
                  <h6 class="display-4 font-weight-bold text-white">Design System</h6>
                  <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </blockquote>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-default shadow border-0">
                <img src="/argon/img/theme/visual-content-creation-feat.jpg" alt="asd" class="card-img-top">
                <blockquote class="card-blockquote">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                       class="svg-bg">
                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                  </svg>
                  <h6 class="display-4 font-weight-bold text-white">Design System</h6>
                  <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </blockquote>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-default shadow border-0">
                <img src="/argon/img/theme/Content-Creation-Or-SEO-Whats-More-Important.jpg" alt="asd" class="card-img-top">
                <blockquote class="card-blockquote">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                       class="svg-bg">
                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                  </svg>
                  <h6 class="display-4 font-weight-bold text-white">Design System</h6>
                  <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </blockquote>
              </div>
            </div>
            <div class="btn-wrapper pt-5">
              <a href="" target="_blank" class="btn btn-default mt-3 mt-md-0">See more on the Penfa Blog</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Carousel from "~/components/argon-demo/Carousel";

  export default {
    layout: 'argon-starter',
    components: {
      Carousel
    },
    data() {
      return {
        showIconsAnimation: false
      };
    },
    methods: {
      onScroll(evt) {
        console.log(evt);
      }
    }
  };
</script>
