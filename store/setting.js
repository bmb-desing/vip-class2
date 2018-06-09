export default {
    state: {
        setting: {
            phone: '+7 (978) 855-61-84',
            email: 'xolms@bmb-design.ru',
            facebook: 'http://www.facebook.com/pages/Vipclass/535538699830079',
            vk: 'http://vk.com/vipclas',
            twitter: 'https://twitter.com/VipClassLLC',
            skype: 'vipclass.vipclass?call',
            homePhone: '+7 (8692) 41-60-00',
            cellPhone: '+7 (978) 881-41-80',
            timeWork: 'Пн-Пт: 8:00-17:00',
            address: 'г. Севастополь, ул. Кесаева 14-Г',
            cellAdress: 'г. Севастополь, пр.Античный 26, (цокольный этаж)'
        }

    },
    getters: {
       getSetting: (state) => {
           return state.setting
       }
    }
}
