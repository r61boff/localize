"use strict";
window.onload = function() {
    if (window.innerWidth < 700 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    } else {
        /**Страницы переводов */
        let serviceIntro = document.querySelector('.service-top');
        if (serviceIntro) {
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.1
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        let targetNodes = Array.prototype.slice.call(target),
                            duration = targetNodes.indexOf(entry.target) * 0.3,
                            startPos = entry.target.getBoundingClientRect().top + pageYOffset;
                        let paralax = () => {
                            let tlSt = gsap.timeline();
                                
                            tlSt
                                .to(entry.target, { y: (startPos - entry.target.getBoundingClientRect().top + pageYOffset) * 0.1 * duration, duration: 0.1 });
                        }    
                        if (entry.isIntersecting) {
                            

                            if (!entry.target.classList.contains('shown')) {
                                let tl = gsap.timeline();
        
                                tl
                                    .fromTo(entry.target, { scale: 0, x: 30 * duration, opacity: 0 }, { scale: 1, x: 0, opacity: 1, duration: duration });
                                entry.target.classList.add('shown');
                                window.addEventListener('scroll', paralax);

                            } else {
                                entry.target.addEventListener('scroll', paralax);
                            }
                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            let target = serviceIntro.querySelectorAll('[class*=-decor-]');
            target.forEach( el => {
                observer.observe(el);
            } )
        }
        let dark = document.querySelector('.dark');
        if (dark) {
            let optionsDark = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.4
            }
            optionsDark.threshold = window.innerHeight < 700 ? 0.2 : 0.4
            // document.querySelectorAll('[class*=dark__decor-fig]').forEach(el => {
            //     el.style.opacity = 0;
            //     el.style.transform = 'scale(0)';
            // })
            let callbackDark = function (entries, observerDark) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('.dark__title'),
                                    round = entry.target.querySelector('.dark__round'),
                                    text = entry.target.querySelector('.dark__text'),
                                    companies = entry.target.querySelector('.dark__companies'),
                                    features = entry.target.querySelector('.dark__features'),
                                    spheares = entry.target.querySelector('.dark__spheares');

                                let tlDark = gsap.timeline();

                                tlDark
                                    .fromTo(entry.target, { yPercent: 100, backgroundColor: '#f1f3f6', opacity: 0 }, { yPercent: 0, backgroundColor: '#525260', opacity: 1, duration: 0.5 })
                                    .from( title, { xPercent: -100, opacity: 0, duration: 0.5} )
                                    .from(round, { xPercent: 200, opacity: 0, duration: 0.5 }, "-=0.4" )
                                    .from(text, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" )
                                    .from(companies, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" )
                                    .from(features, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" )
                                    .from(spheares, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" );
                                
                                //showDarkDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observerDark = new IntersectionObserver(callbackDark, optionsDark);
            let targetDark = document.querySelectorAll('.dark');
            targetDark.forEach( el => {
                observerDark.observe(el);
            } )
        }
        let dark2 = document.querySelectorAll('.dark2');
        if (dark2.length) {
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.4
            }
            dark2.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'transformY(100%)';
            })
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    subtitle = entry.target.querySelectorAll('[class*=subtitle]'),
                                    p = entry.target.querySelectorAll('[class*=__text] p, [class*=__text] ul'),
                                    decor = entry.target.querySelectorAll('[class*=-decor]'),
                                    slider = entry.target.querySelectorAll('[class*=__slider-js], [class*=__slider-buttons]'),
                                    col1 = entry.target.querySelector('.dark2__ustform-col1'),
                                    col2 = entry.target.querySelector('.dark2__ustform-col2');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: 100, opacity: 0, duration: 0.5} )
                                    .from(subtitle, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3" )
                                    .from(p, { 
                                                yPercent: 100, opacity: 0, duration: 0.5,
                                                delay: function(index) {
                                                    return index * 0.2;
                                            } }, "-=0.3" )
                                    .from(decor, { 
                                                    scale: 0, yPercent:50, xPercent: 40, opacity: 0, duration: 0.5,
                                                    delay: function(index) {
                                                        return index * 0.2;
                                                }}, "-=0.3" )
                                    .from(slider, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" )
                                    .from(col1, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.5" )
                                    .from(col2, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5" );
                                
                                //showDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            dark2.forEach( el => {
                observer.observe(el);
            } )
        }
        

        let showAllDecor = () => {
            let figs = document.querySelectorAll('[class*=__decor-fig], [class*=__intro-decor-fig], [class*=__contact-fig]');
            if (figs.length) {
                let options = {
                    //root: document.querySelector('.page'),
                    rootMargin: '0px',
                    threshold: 0.01,
                }
                figs.forEach(el => {
                    el.style.opacity = 0;
                    el.style.transform = 'scale(0.5)';
                    el.setAttribute('data-y', el.getBoundingClientRect().top + pageYOffset )
                })
                let callback = function (entries, observer) {
                    /* Content excerpted, show below */
                    entries.forEach(
                        entry => {
                            let targetNodes = Array.prototype.slice.call(figs),
                                duration = targetNodes.indexOf(entry.target)+1 * 0.3;
                            //  const startPos = entry.target.getBoundingClientRect().top + pageYOffset;

                            if (entry.isIntersecting) {
                                //console.log(startPos, entry.target);

                                //entry.target.addEventListener('scroll', paralax);
                                    const startPos = entry.target.getAttribute('data-y');
                                    let paralaxAbout = () => {
                                        let tlInfImgs = gsap.timeline();

                                        tlInfImgs
                                            .to(entry.target, { y: function() {
                                                return ( (pageYOffset + 1) / startPos ) * 40;
                                            }, scale: 1, opacity: 1, duration: 1, oncomplete: function () { } });
                                    }
                                    paralaxAbout()
                                    window.addEventListener('scroll', paralaxAbout);
                                    entry.target.classList.add('shown');
                            } else {
                                //window.removeEventListener('scroll', paralaxAbout)
                            }
                        }
                    )
                };
                let observer = new IntersectionObserver(callback, options);
                figs.forEach(el => {
                    observer.observe(el);
                })
            }
        }
        showAllDecor();
        
        let serviceInfo = document.querySelectorAll('.service-info__item');
        if (serviceInfo.length) {

            serviceInfo.forEach(el => {
                el.style.opacity = 0;
            })

            let optionsInfo = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3,
            }
            let callbackInfo = function (entries, observerInfo) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            let targetInfoNodes = Array.prototype.slice.call(targetInfo),
                                ind = targetInfoNodes.indexOf(entry.target);
                            if (!entry.target.classList.contains('shown')) {

                                let content = entry.target.querySelector('.service-info__item-content'),
                                    imgs = entry.target.querySelector('.service-info__item-imgs'),
                                    dir = 1;
                                    if (ind % 2 == 0) {dir = -1}

                                let tlInfo = gsap.timeline();

                                tlInfo
                                    .to( entry.target, { opacity: 1, duration: 0 } )
                                    .fromTo(content, { xPercent: 200 * dir, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.5 })
                                    .fromTo(imgs, { xPercent: -200 * dir, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.5 })

                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observerInfo = new IntersectionObserver(callbackInfo, optionsInfo);
            let targetInfo = document.querySelectorAll('.service-info__item');
            targetInfo.forEach(el => {
                observerInfo.observe(el);
            })
        }
        
        let serviceInfoImgs = document.querySelectorAll('.service-info__item-imgs img, .service-info__item-imgs svg:not([class*=decor21]):not([class*=decor31]), .service-info__item-imgs div');
        if (serviceInfoImgs.length) {

            

            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.4,
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        let targetNodes = Array.prototype.slice.call(serviceInfoImgs),
                            duration = targetNodes.indexOf(entry.target)+1 * 0.1;
                        //  const startPos = entry.target.getBoundingClientRect().top + pageYOffset;
                            
                        if (entry.isIntersecting) {
                            
                            //entry.target.addEventListener('scroll', paralax);
                            if (!entry.target.classList.contains('shown')) {
                                const startPos = entry.target.getBoundingClientRect().top + pageYOffset;
                                let paralaxInfo = () => {
                                    let tlInfImgs = gsap.timeline();
                                        
                                    tlInfImgs
                                        .to(entry.target, { y: ( - startPos + pageYOffset) * 0.02, duration: 1 });
                                }    
                                window.addEventListener('scroll', paralaxInfo);
                                //entry.target.classList.add('shown');
                            } else {
                                
                            }
                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            serviceInfoImgs.forEach(el => {
                observer.observe(el);
            })
        }

        let serviceAbout = document.querySelector('.service-about__inner');
        if (serviceAbout) {
            document.querySelectorAll('.service-about__inner').forEach( el => {el.style.opacity = '0'});
            document.querySelectorAll('[class*=service-about__decor-fig]').forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    content = entry.target.querySelector('[class*=__content]'),
                                    btn = entry.target.querySelector('[class*=__btn]'),
                                    imgs = entry.target.querySelector('[class*=__imgs]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { xPercent: -100, opacity: 0, duration: 0.5 })
                                    .from(content, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.4")
                                    .from(btn, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                    .from(imgs, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                //showAboutDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            let target = document.querySelectorAll('.service-about__inner');
            target.forEach(el => {
                observer.observe(el);
            })
        }

        

        let advantages = document.querySelectorAll('.advantages__inner');
        if (advantages.length) {
            advantages.forEach(el => { el.style.opacity = '0' });
            
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    items = entry.target.querySelectorAll('[class=advantages__item]');

                                let tl = gsap.timeline();
                                
                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: -100, opacity: 0, duration: 0.5 })
                                    .from(items[0], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[1], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[2], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[3], { yPercent: 100, opacity: 0, duration: 0.5 })
                                    .from(items[4], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                    .from(items[5], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                //showAdvantagesDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            advantages.forEach(el => {
                observer.observe(el);
            })
        }

        let gray = document.querySelector('.gray.calc-form');
        if (gray) {
            gray.style.opacity = 0;
            //document.querySelector('.calc-form__imgs').style.opacity = 0;
            //document.querySelector('.calc-form__form').style.opacity = 0;

            let optionsDark = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callbackDark = function (entries, observerDark) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let imgs = entry.target.querySelector('.calc-form__imgs'),
                                    form = entry.target.querySelector('.calc-form__form');

                                let tlDark = gsap.timeline();

                                tlDark
                                    .fromTo(entry.target, { yPercent: 100, backgroundColor: '#f1f3f6', opacity: 0 }, { yPercent: 0, backgroundColor: '#DDE3ED', opacity: 1, duration: 0.5 })
                                    .from(imgs, { xPercent: -100, opacity: 0, duration: 0.5 })
                                    .from(form, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3");

                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observerDark = new IntersectionObserver(callbackDark, optionsDark);
            observerDark.observe(gray);
        }

        let addServ = document.querySelectorAll('.add-serv__inner');
        if (addServ.length) {
            addServ.forEach(el => { el.style.opacity = '0' });
            let figs = document.querySelectorAll('[class*=advantages__decor-fig]');
            figs.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                
                                let title = entry.target.querySelector('[class*=__title]'),
                                    items = entry.target.querySelectorAll('[class=add-serv__item]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: -100, opacity: 0, duration: 0.5 })
                                    .from(items[0], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[1], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[2], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[3], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[4], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[5], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[6], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[7], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[8], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                //showAdvantagesDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            addServ.forEach(el => {
                observer.observe(el);
            })
        }
        
        let areas = document.querySelectorAll('.areas__inner');
        if (areas.length) {
            areas.forEach(el => { el.style.opacity = '0' });
            let figs = document.querySelectorAll('[class*=advantages__decor-fig]');
            figs.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    descr = entry.target.querySelectorAll('[class*=descr]'),
                                    subtitle = entry.target.querySelectorAll('[class*=__subtitle]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { opacity: 0 }, { opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(descr, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(subtitle, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            areas.forEach(el => {
                observer.observe(el);
            })
        }
        let areasList = document.querySelectorAll('.areas__list');
        if (areasList.length) {
            let figs = document.querySelectorAll('.areas__item');
            figs.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {
                                let items = document.querySelectorAll('.areas__item')
                                let tl = gsap.timeline();

                                tl
                                    .fromTo(items, {
                                        xPercent: -100,
                                        opacity: 0,
                                        }, {
                                        xPercent: 0,
                                        opacity: 1, 
                                        duration: 0.5, 
                                        delay: function (index, target, targets) { //function-based value
                                            return index * 0.1 + 1.5;
                                        } })
                                    
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            areasList.forEach(el => {
                observer.observe(el);
            })
        }
        
        let tabs = document.querySelectorAll('.tabs__inner');
        if (tabs.length) {
            tabs.forEach(el => { el.style.opacity = '0' });
            let figs = document.querySelectorAll('[class*=advantages__decor-fig]');
            figs.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    descr = entry.target.querySelectorAll('[class*=descr]'),
                                    subtitle = entry.target.querySelectorAll('[class*=__subtitle]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            tabs.forEach(el => {
                observer.observe(el);
            })
        }
        let tabsItem = document.querySelectorAll('.tabs__item');
        if (tabsItem.length) {
            tabsItem.forEach(el => { el.style.opacity = '0' });
            
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.4
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let text = entry.target.querySelector('p, li'),
                                    img = entry.target.querySelectorAll('[class*=tabs__item-img]');

                                let tl = gsap.timeline();

                                tl
                                    .to( entry.target, {opacity: 1, duration: 0.1} )
                                    .from(img, { xPercent: 100, opacity: 0, duration: 0.5 })
                                    .from(text, {
                                        yPercent: 100,
                                        opacity: 0,
                                        duration: 0.5,
                                        delay: function (index, target, targets) { //function-based value
                                            return index * 0.1 + .5;
                                        }
                                    }, "-=0.2")
                                    
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            tabsItem.forEach(el => {
                observer.observe(el);
            })
        }
        let tabsNames = document.querySelectorAll('.tabs__names');
        if (tabsNames.length) {
            let figs = document.querySelectorAll('.tabs__name');
            figs.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {
                                let items = document.querySelectorAll('.tabs__name')
                                let tl = gsap.timeline();

                                tl
                                    .fromTo(items, {
                                        xPercent: -100,
                                        yPercent: -25,
                                        opacity: 0,
                                        }, {
                                        xPercent: 0,
                                        yPercent: 0,
                                        opacity: 1, 
                                        duration: 0.5, 
                                        delay: function (index, target, targets) { //function-based value
                                            return index * 0.1 + .5;
                                        } })
                                    
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            tabsNames.forEach(el => {
                observer.observe(el);
            })
        }

        let techAreas = document.querySelectorAll('.techareas__inner');
        if (techAreas.length) {
            techAreas.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    decor = entry.target.querySelectorAll('[class*=decor-img]'),
                                    text = entry.target.querySelectorAll('[class*=__text]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from( title, {yPercent: 100, opacity: 0, duration: 0.5})
                                    .from(decor, {
                                        xPercent: -100, opacity: 0.2, delay: function (index, target, targets) { //function-based value
                                            return index * 0.2 + .3;
                                        }, duration: 0.5} )
                                    .from( text, {xPercent: 100, opacity: 0.2, duration: 0.5 }, "-=0.3" )


                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            techAreas.forEach(el => {
                observer.observe(el);
            })
        }

        let techtarif = document.querySelectorAll('.techtarif__inner');
        if (techtarif.length) {
            techtarif.forEach(el => { el.style.opacity = '0' });

            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    items = entry.target.querySelectorAll('[class=techtarif__item]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: -100, opacity: 0, duration: 0.5 })
                                    .from(items[0], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[1], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[2], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items[3], { yPercent: 100, opacity: 0, duration: 0.5 })
                                    .from(items[4], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                    .from(items[5], { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.5")
                                //showAdvantagesDecor();
                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            techtarif.forEach(el => {
                observer.observe(el);
            })
        }

        let ustInfo = document.querySelectorAll('.ust-info__inner');
        if (ustInfo.length) {
            ustInfo.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    decor = entry.target.querySelectorAll('[class*=decor-img]'),
                                    text = entry.target.querySelectorAll('[class*=__text]');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from('p, li', { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.4")
                                    .from(decor, {
                                        xPercent: 100, opacity: 0.2, delay: function (index, target, targets) { //function-based value
                                            return index * 0.2 + .3;
                                        }, duration: 0.5}, "-=0.3")


                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            ustInfo.forEach(el => {
                observer.observe(el);
            })
        }

        let aboutDig = document.querySelectorAll('.about-dig__inner');
        if (aboutDig.length) {
            aboutDig.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    items = entry.target.querySelectorAll('.about-dig__item');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items, {
                                        xPercent: 100, opacity: 0, delay: function (index, target, targets) { //function-based value
                                            return index * 0.2 + .3;
                                        }, duration: 0.5}, "-=0.3")


                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            aboutDig.forEach(el => {
                observer.observe(el);
            })
        }
        
        let contacts = document.querySelectorAll('.contacts__inner');
        if (contacts.length) {
            contacts.forEach(el => { el.style.opacity = '0' });
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('[class*=__title]'),
                                    items = entry.target.querySelectorAll('.contacts__item');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.2")
                                    .from(items, {
                                        xPercent: -100, opacity: 0, delay: function (index, target, targets) { //function-based value
                                            return index * 0.4 + .2;
                                        }, duration: 0.5}, "-=0.3")


                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            contacts.forEach(el => {
                observer.observe(el);
            })
        }

        let ustForm1 = document.querySelector('.ust-form1');
        if (ustForm1) {
            ustForm1.style.opacity = 0;
            //document.querySelector('.calc-form__imgs').style.opacity = 0;
            //document.querySelector('.calc-form__form').style.opacity = 0;

            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.2
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('.ust-form1__title'),
                                    left = entry.target.querySelector('.ust-form1__col1'),
                                    right = entry.target.querySelector('.ust-form1__col2');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, backgroundColor: '#f1f3f6', opacity: 0 }, { yPercent: 0, backgroundColor: '#DDE3ED', opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3")
                                    .from(left, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.3")
                                    .from(right, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3");

                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            observer.observe(ustForm1);
        }
        let speakus = document.querySelector('.speakus__intro');
        if (speakus) {
            speakus.style.opacity = 0;
            //document.querySelector('.calc-form__imgs').style.opacity = 0;
            //document.querySelector('.calc-form__form').style.opacity = 0;

            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('.speakus__intro-title'),
                                    left = entry.target.querySelectorAll('[class*=speakus__intro-decor-w]'),
                                    right = entry.target.querySelector('.speakus__intro-text');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
                                    .from(title, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3")
                                    .from(left, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.3")
                                    .from(right, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3");

                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            observer.observe(speakus);
        }
        let speakusForm = document.querySelector('.speakus__form');
        if (speakusForm) {
            speakusForm.style.opacity = 0;
            //document.querySelector('.calc-form__imgs').style.opacity = 0;
            //document.querySelector('.calc-form__form').style.opacity = 0;

            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.3
            }
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('shown')) {

                                let title = entry.target.querySelector('.speakus__form-title'),
                                    left = entry.target.querySelectorAll('.speakus__form-col1'),
                                    right = entry.target.querySelector('.speakus__form-col2');

                                let tl = gsap.timeline();

                                tl
                                    .fromTo(entry.target, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.3 })
                                    .from(title, { yPercent: 100, opacity: 0, duration: 0.5 }, "-=0.1")
                                    .from(left, { xPercent: -100, opacity: 0, duration: 0.5 }, "-=0.3")
                                    .from(right, { xPercent: 100, opacity: 0, duration: 0.5 }, "-=0.3");

                                entry.target.classList.add('shown');
                            }

                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            observer.observe(speakusForm);
        }

        let aboutIntro = document.querySelectorAll('.about-intro__inner');
        if (aboutIntro.length) {
            let options = {
                //root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 0.1
            }
            aboutIntro.forEach(el=>{el.style.opacity = 0;})
            let callback = function (entries, observer) {
                /* Content excerpted, show below */
                entries.forEach(
                    entry => {
                    
                        if (entry.isIntersecting) {


                            if (!entry.target.classList.contains('shown')) {
                                let tl = gsap.timeline();
                                let left = entry.target.querySelector('.about-intro__info'),
                                    right = entry.target.querySelector('.video-link');

                                tl
                                    .fromTo(entry.target, { opacity: 0 }, { opacity: 1, duration: 0.5 })
                                    .from(left, {xPercent: -100, opacity: 0, duration: 0.5})
                                    .from(right, {xPercent: 100, opacity: 0, duration: 0.5});
                                
                                entry.target.classList.add('shown');

                            } else {
                            }
                        }
                    }
                )
            };
            let observer = new IntersectionObserver(callback, options);
            aboutIntro.forEach(el => {
                observer.observe(el);
            })
        }
    }
}