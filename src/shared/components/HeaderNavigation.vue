<template>
  <header class="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">Breaking Bad</a>

      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink to="/" class="nav__link" active-class="active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Home</span>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/about" class="nav__link" active-class="active-link">
              <i class='bx bx-user nav__icon'></i>
              <span class="nav__name">About</span>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/github" class="nav__link" active-class="active-link">
              <i class='bx bx-code-curly nav__icon'></i>
              <span class="nav__name">Code</span>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/phone" class="nav__link" active-class="active-link">
              <i class='bx bx-message-square-detail nav__icon'></i>
              <span class="nav__name">Contact me</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--clr-container);
    z-index: var(--z-fixed);
    transition: .4s;
    box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, .15)
  }

  .nav{
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .nav__logo{
    color: var(--clr-title);
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    .nav__menu{
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: var(--clr-container);
      box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
      width: 100%;
      height: 4rem;
      padding: 0 1rem;
      display:grid;
      align-content: center;
      border-radius: 1.25rem 1.25rem  0 0;
      transition: .4s;
    }
  }
.nav__list, .nav__link{
  display: flex;
}

.nav__link{
  flex-direction: column;
  align-items: center;
  row-gap: .25rem;
  color: var(--clr-text);
}

.nav__list{
  justify-content: space-around;
}

.nav__name{
  font-size: var(--font-size-tiny);
}

.nav__icon{
  font-size: 1.5rem;
}

.active-link{
  position: relative;
  color: var(--clr-main);
  transition: .3s;
}

@media screen and (max-width: 320px){
  .nav__name{
    display: none;
  }
}

@media screen and (min-width: 576px){
  .nav__list{
    justify-content: center;
    column-gap: 3rem;
  }
}
@media screen and (min-width: 767px){
  body{
    margin: 0;
  }

  .nav{
    height: calc(var(--header-height) + 1.5rem);
  }

  .nav__icon{
    display: none;
  }

  .nav__name{
    font-size: var(--font-size);
    font-weight: 600;
  }

  .nav__link:hover{
    color: var(--clr-main);
  }

  .active-link::before {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    width: 4px;
    height: 4px;
    background-color: var(--clr-main);
    border-radius: 50%;
  }
}

</style>