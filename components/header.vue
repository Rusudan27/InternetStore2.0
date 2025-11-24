<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-logo">
        <span class="header__inner-logo-title">Rocket</span>
        <span class="header__inner-logo-subtitle">Store</span>
      </div>

      <div class="header__right">
        <div class="header__right-search">
          <IconSearch class="header__right-search-icon" />
          <input
            class="header__right-search-input"
            type="search"
            placeholder=""
          />
        </div>

        <nav class="header__nav">
          <NuxtLink
            v-for="item in navLinks"
            :key="item.to"
            :to="item.to"
            class="header__nav-link"
          >
            <component :is="item.icon" class="header__nav-icon" />
            <span class="sr-only">{{ }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconSearch from '~/assets/icons/btns/search.svg'
import IconUser   from '~/assets/icons/btns/user.svg'
import IconSaved  from '~/assets/icons/btns/saved.svg'
import IconBasket from '~/assets/icons/btns/basket.svg'

const navLinks = [
  { to: '/user',   icon: IconUser   },
  { to: '/saved',  icon: IconSaved  },
  { to: '/basket', icon: IconBasket },
] as const
</script>

<style scoped lang="scss">
@use "assets/scss/breakpoints" as *;
@use "assets/scss/variables" as *;

.header {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 10px;
  max-width: 1300px;
  margin: 0 auto;

  &__inner {
    width: 100%;
    background: $lightgrey;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    box-shadow: 4px 4px $white;

    @include breakpoint((pad, down)) {
      align-items: center;
      gap: 12px;
      padding: 12px;
    }

    &-logo {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title {
        font-family: $Righteous;
        font-size: $font-size-xm;
        line-height: 100%;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: 15px;
        }
      }

      &-subtitle {
        font-family: $Raleway;
        font-size: $font-size-s;
        font-weight: $regular;
        letter-spacing: 7.58px;
        text-transform: uppercase;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: 7px;
        }
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 39px;

    @include breakpoint((pad, down)) {
      gap: 15px;
    }

    &-search {
      display: flex;
      align-items: center;
      border-top: 3px solid $white;
      border-left: 3px solid $white;
      background-color: $black;
      height: 40px;
      width: 421px;
      position: relative;

      @include breakpoint((pad, down)) {
        width: 130px;
      }

      &-icon {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        color: $white;
        stroke: $white;

        @include breakpoint((pad, down)) {
          width: 12px;
          height: 12px;
        }
      }

      &-input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        padding-left: calc(16px + 30px + 12px);
        padding-right: 44px;
        font-size: $font-size-xs;
        font-family: $Raleway;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: $font-size-xxs;
        }
      }
    }
  }

  &__nav {
    display: flex;
    gap: 30px;

    @include breakpoint((pad, down)) {
      gap: 20px;
    }

    &-icon {
      width: 30px;
      height: 30px;
      color: $white;

      @include breakpoint((pad, down)) {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
