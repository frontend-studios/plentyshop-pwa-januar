<template>

  <div class="w-full mx-auto fs-homepage mt-4">
    <div class="flex max-w-screen-2xl mx-auto hero relative justify-center mt-4">
      <div class="flex relative">
        <a :href="$t('customHomepage.heroCTALinkTo')">
          <img :src="$t('customHomepage.heroImage')" alt="HeroImage" class="h-full object-cover object-left"/>
          <div class="heroline-wrapper absolute">
            <span class="text-sm font-bold block bg-primary-700 p-3 pb-0 text-white" v-if="$t('customHomepage.heroSubHeadline') != ''">{{ $t('customHomepage.heroSubHeadline') }}</span>
            <span class="text-xl block bg-primary-700 px-3 pb-3 mb-3 text-white" v-if="$t('customHomepage.heroSubHeadline') != ''">{{ $t('customHomepage.heroHeadline') }}</span>
            <span class="btn btn-primary inline-block font-medium text-base py-2 px-4 text-black shadow bg-secondary-700 hover:bg-primary-700 hover:text-white" v-if="$t('customHomepage.heroCTABtnText') != ''">
              {{ $t('customHomepage.heroCTABtnText') }}
            </span>
          </div>
        </a>
      </div>
    </div>


    <div class="w-full mx-auto cats mt-4 bg-primary-700">
      <div class="max-w-screen-2xl mx-auto relative w-full mb-3 py-12">
        <div class="flex flex-wrap justify-between w-full items-end">
          <div>
            <span class="text-sm block text-white">{{ $t('customHomepage.catSubHeadline') }}</span>
            <span class="text-2xl font-bold block text-white">{{ $t('customHomepage.catHeadline') }}</span>
          </div>
          <div>
            <a href="" class="text-xs text-white hover:underline">
                 {{ $t('customHomepage.catShowAll') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mx-auto relative w-full mb-3 py-5 catcontent">
      <div class="flex flex-wrap flex-col md:flex-row gap-4 justify-center">
        <div
          v-for="{ title, image, link } in categories"
          :key="title"
          role="img"
          :aria-label="title"
          :aria-labelledby="'image-' + title"
          class="relative flex-1 justify-center"
        >
          <a :href="link">
            <img class="border-4 border-primary-700 rounded" :src="image" :alt="title" />
            <div class="cat-wrapper absolute">
              <span class="btn btn-primary inline-block font-medium text-base py-2 px-4 text-black shadow bg-secondary-700 hover:bg-primary-700 hover:text-white">{{ title }}</span>
            </div>
          </a>


        </div>
      </div>
    </div>


  </div><!--  ENDE fs-Homepage -->





</template>

<script lang="ts" setup>
import {SfButton} from '@storefront-ui/vue';

const {data: categoryTree} = useCategoryTree();
const {data: recommendedProducts, fetchProductRecommended} = useProductRecommended('homepage');


definePageMeta({
  pageType: 'static',
});

const firstCategoryId = categoryTree.value?.[0]?.id;

onMounted(async () => {
  if (firstCategoryId) {
    await fetchProductRecommended(firstCategoryId.toString());
  }
});

const categories = [
  {
    title: 'Neuheiten',
    link: '#Neuheiten',
    image: 'https://picsum.photos/seed/picsum/500/360\n',
  },
  {
    title: 'Top-Seller',
    link: '#Topseller',
    image: 'https://picsum.photos/seed/picsum/500/360\n',
  },
  {
    title: 'Kategorie',
    link: '#Kategorie3',
    image: 'https://picsum.photos/seed/picsum/500/360\n',
  }
];
</script>
