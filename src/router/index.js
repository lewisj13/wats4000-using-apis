import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import WordsPrecede from '@/components/WordsPrecede'
import WordsAfter from '@/components/WordsAfter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/words-precede',
      name: 'WordsPrecede',
      component: WordsPrecede
    },
    {
      path: '/words-after',
      name: 'WordsAfter',
      component: WordsAfter
    }
  ]
})
