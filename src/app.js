import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        message: "HI",
        loading1:false,
    }
})


import chai from 'chai'

const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount()
    vm.$on('click',function(){
        expect(1).to.eq(1)
    })

    let button = vm.$el
    button.click()
    vm.$el.remove()
    vm.$destroy()
}



