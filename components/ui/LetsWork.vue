<template>
  <div class="letsWork overflow-hidden pt-[140px] bg-pink"
       @mouseleave="colorInvers = true"
       :class="{'text-white': isWhite}"
  >
    <div class="container">
      <p class="text-sm relative z-10 ">{{ $t('Is there a project?') }}</p>

      <div class="flex justify-between mt-[56px]  relative z-10">
        <div class="max-w-[470px]">
          <h2 class="letsWork-title ">{{ $t('Let’s work together') }}</h2>
        </div>

        <div class="max-w-[152px] letsWork-contacts text-sm flex flex-col gap-[36px]">
          <div class="letsWork-contacts-box ">
            <p class="letsWork-contacts-title ">{{ $t('Contacts.For all questions') }}</p>
            <MyLink :data="$t('Contacts.phone')" :type="'tel'"/>
            <MyLink :data="$t('Contacts.email')" :type="'email'"/>
          </div>

          <div class="letsWork-contacts-box trans">
            <p class="letsWork-contacts-title">{{ $t('Contacts.Office in Russia') }}</p>
            <div>{{ $t('Contacts.address_ru') }}</div>
            <a href="#">
              <LinkTo/>
            </a>
          </div>

          <div class="letsWork-contacts-box trans">
            <p class="letsWork-contacts-title">{{ $t('Contacts.Office in Dubai') }}</p>
            <p>{{ $t('Contacts.address_du') }}</p>
            <a href="#">
              <LinkTo/>
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between pb-[30px] mt-[140px]">
        <ul class="linkList relative z-10">
          <li v-for="link in socials.left" class="underlineLink" :key="link.name"><a :href="link.link" target="_blank">{{
              link.name
            }}</a></li>
        </ul>

        <div class="relative cursor-pointer flex items-center justify-center w-[358px] h-[88px]" @mouseenter="colorInvers = false">
          <span
              class="absolute circle bg-black w-[358px] h-[358px] rounded-full"
              :class="[{'isBig': isWhite}]"
          ></span>
          <span class="relative z-5 text-white text-3xl">{{ $t('Go') }}</span>
        </div>

        <ul class="linkList relative z-10">
          <li v-for="link in socials.right" class="underlineLink" :key="link.name"><a :href="link.link" target="_blank">{{
              link.name
            }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyLink from "~/components/ui/MyLink.vue";
import LinkTo from "~/components/Icons/LinkTo.vue";

const colorInvers = ref(true)

const isWhite = computed(() => !colorInvers.value)

const socials = {
  'left': [
    {
      name: 'Facebook',
      link: '#',
    },
    {
      name: 'Instagram',
      link: '#',
    },
    {
      name: 'Telegram',
      link: '#',
    },
  ],
  'right': [
    {
      name: 'Behance',
      link: '#',
    },
    {
      name: 'Linkedn',
      link: '#',
    },
    {
      name: 'Privacy Policy',
      link: '#',
    },
  ]
}
</script>

<style scoped lang="scss">
.letsWork {
  p, a,h2{
    transition: color .6s;
  }
  &-title {
    font-size: 112px;
    line-height: 1;
  }

  &-contacts-title {
    @apply mb-[8px];
  }

  &-contacts-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.circle {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  pointer-events: none;
  transition: .6s ease-in-out;
  &.isBig{
    transform: translate(-50%, -50%) scale(10);
  }
}

.linkList {
  @apply flex items-center gap-6 text-sm;
}
</style>