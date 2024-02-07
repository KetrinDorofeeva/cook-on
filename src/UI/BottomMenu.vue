<template>
  <article class="fixed bottom-0 w-full flex items-center justify-between py-3 px-5 bg-white whitespace-nowrap shadow-[0_0_3px_rgba(0,0,0,.06)]">
    <section @click="switchingMenuSections" class="menu_section active text-[11px] text-center cursor-pointer">
      <Icon icon="ph:house-bold" class="inline-block mb-px text-[#D2D2D2]" width="22px" height="22px" />
      <p class="text-[rgba(0,0,0,.6)]">Главная</p>
    </section>
    <section @click="switchingMenuSections" class="menu_section text-[11px] text-center cursor-pointer">
      <!--<img src="/public/img/cook.svg" class="inline-block w-[22px] h-[22px] mb-px" alt="Мои рецепты">-->
      <svg class="inline-block mb-px" width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_187_203)">
          <path d="M3.57126 19.2858H16.4284M3.57126 12.143H16.4284M19.1855 4.85724C19.0403 4.25813 18.7418 3.70706 18.3193 3.25807C17.8969 2.80907 17.365 2.47757 16.7759 2.29607C16.1867 2.11457 15.5605 2.0893 14.9586 2.22274C14.3568 2.35618 13.7999 2.64375 13.3427 3.05724C13.0931 2.37111 12.6384 1.7784 12.0404 1.35956C11.4424 0.940731 10.7299 0.716064 9.99983 0.716064C9.26972 0.716064 8.55729 0.940731 7.95925 1.35956C7.36122 1.7784 6.90655 2.37111 6.65697 3.05724C6.19973 2.64375 5.64288 2.35618 5.04102 2.22274C4.43915 2.0893 3.81294 2.11457 3.22379 2.29607C2.63463 2.47757 2.10276 2.80907 1.68033 3.25807C1.25789 3.70706 0.9594 4.25813 0.814114 4.85724C0.700605 5.32478 0.682345 5.81037 0.760421 6.28511C0.838498 6.75985 1.01131 7.21402 1.26858 7.62058C1.52584 8.02713 1.86229 8.37776 2.25789 8.65157C2.65349 8.92539 3.10014 9.11679 3.57126 9.21438V14.2858C3.57126 14.6647 3.72177 15.0281 3.98968 15.296C4.25758 15.5639 4.62095 15.7144 4.99983 15.7144H14.9998C15.3787 15.7144 15.7421 15.5639 16.01 15.296C16.2779 15.0281 16.4284 14.6647 16.4284 14.2858V9.21438C16.8995 9.11679 17.3462 8.92539 17.7418 8.65157C18.1374 8.37776 18.4738 8.02713 18.7311 7.62058C18.9883 7.21402 19.1612 6.75985 19.2392 6.28511C19.3173 5.81037 19.2991 5.32478 19.1855 4.85724Z" stroke="#D2D2D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_187_203">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <p class="text-[rgba(0,0,0,.6)]">Мои рецепты</p>
    </section>
    <section @click="switchingMenuSections" class="menu_section text-[11px] text-center cursor-pointer">
      <Icon icon="ph:heart-bold" class="inline-block mb-px text-[#D2D2D2]" width="22px" height="22px" />
      <p class="text-[rgba(0,0,0,.6)]">Избранное</p>
    </section>
    <section @click="switchingMenuSections" class="menu_section text-[11px] text-center cursor-pointer">
      <!--<img src="/public/img/user.svg" class="inline-block w-[22px] h-[22px] mb-px" alt="Профиль">-->
      <svg class="inline-block mb-px" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="#D2D2D2"/>
      </svg>
      <p class="text-[rgba(0,0,0,.6)]">Профиль</p>
    </section>
  </article>
</template>

<script setup>

</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'BottomMenu',
    components: {
      Icon
    },
    methods: {
      switchingMenuSections() {
        const tabsButtons = document.querySelectorAll('.menu_section');

        tabsButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const prevActiveButton = document.querySelector('.menu_section.active');

            if (prevActiveButton) {
              prevActiveButton.classList.remove('active');
            }

            btn.classList.add('active');
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu_section svg,
  .menu_section p {
    transition: .3s ease;
  }
  .menu_section.active svg {
    @apply text-[#F68B31]
  }
  .menu_section.active:nth-child(2) svg path {
    @apply stroke-[#F68B31]
  }
  .menu_section.active:last-child svg path {
    @apply fill-[#F68B31]
  }
  .menu_section.active p {
    @apply text-black
  }
</style>