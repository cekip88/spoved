class Front {
	constructor (){
		const _ = this;

		_.init();
	}
	handlers(){
		const _ = this;
		if(document.querySelector(".contacts-add")) {
			let btns = document.querySelectorAll('.add-plus');
			btns.forEach(function(btn) {
				btn.addEventListener('click',function(e) {
					e.preventDefault();
					_.addNewFields({
						'event' : e, 'item' : this
					})
				})
			})
		}
		if(document.querySelector(".fq")) {
			let btns = document.querySelectorAll('.fq .item-btn');
			btns.forEach(function(btn) {
				btn.addEventListener('click',function(e) {
					e.preventDefault();
					_.fqShow({
						'event' : e, 'item' : this
					})
				})
			})
		}
		window.addEventListener('resize',function() {
			_.fqHeightCheck();
		});
		if (document.querySelector('.aside')){
			document.querySelector('.aside .burger').addEventListener('click',function (e) {
				_.asideShowHide();
			});
			document.querySelector('.aside-close').addEventListener('click',function (e) {
				_.asideShowHide();
			});
		}
		if (document.querySelector('.main>.login')){
			document.querySelector('.main .login .benefits-link').addEventListener('click',function () {
				_.benefitsShowHide();
			});
			document.querySelector('.main .benefits .close-btn').addEventListener('click',function () {
				_.benefitsShowHide();
			});
			document.querySelector('.main .login-reg-btn').addEventListener('click',function () {
				_.regFormShowHide()
			});
			document.querySelector('#registration-form .cancel').addEventListener('click',function () {
				_.regFormShowHide()
			});
			document.querySelector('.main .login .login-forgot').addEventListener('click',function () {
				_.forgotFormShowHide()
			});
			document.querySelector('#forgot-form .cancel').addEventListener('click',function () {
				_.forgotFormShowHide()
			});
			window.addEventListener('resize',function () {
				_.setTableWidth();
			})
		}

		let createUserBtn = document.getElementById('create-user');
		if (createUserBtn) {
			let form = document.querySelector('#registration-user');
			createUserBtn.addEventListener('click',function (){
				_.showHideRegUser(form);
			});
			form.querySelector('.cancel').addEventListener('click',function (){
				_.showHideRegUser(form)
			})
		}
		let createTeamBtn = document.getElementById('create-team');
		if (createTeamBtn) {
			let form = document.querySelector('#registration-team');
			createTeamBtn.addEventListener('click',function (){
				_.showHideRegUser(form);
			});
			form.querySelector('.cancel').addEventListener('click',function (){
				_.showHideRegUser(form)
			})
		};
		let manageBtn = document.getElementById('manage-button');
		if (manageBtn) {
			let form = document.querySelector('#manage-form');
			manageBtn.addEventListener('click',function (){
				_.showHideRegUser(form);
			});
			form.querySelector('.cancel').addEventListener('click',function (){
				_.showHideRegUser(form)
			})
		}
		let addContactBtn = document.getElementById('add-contact');
		if (addContactBtn) {
			let form = document.querySelector('#add-contact-form');
			addContactBtn.addEventListener('click',function (){
				_.showHideRegUser(form);
			});
			form.querySelector('.cancel').addEventListener('click',function (){
				_.showHideRegUser(form)
			})
		}
		let formCont = document.querySelector('.form-cont');
		if (formCont){
			formCont.addEventListener('click',function (e){
				let target = e.target;
				if (target.classList.contains('form-cont')){
					formCont.classList.remove('active');
					for (let i = 0; i < formCont.children.length; i++) {
						formCont.children[i].classList.remove('active')
					}
				}
			})
		}

		let selHeads = document.querySelectorAll('.select-head');
		if (selHeads.length){
			selHeads.forEach(function (btn){
				btn.addEventListener('click',function (){
					btn.nextElementSibling.classList.toggle('active')
				})
			});
			let btns = document.querySelectorAll('.add-select .select-body .option');
			btns.forEach(function (btn){
				btn.addEventListener('click',function (){
					if (!btn.classList.contains('done'))btn.parentElement.previousElementSibling.firstElementChild.textContent = btn.textContent;
					btn.parentElement.classList.remove('active');
					let checks = btn.parentElement.querySelectorAll('label');
					if (checks.length){
						let arr = btn.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.choosen');
						arr.textContent = '';
						checks.forEach(function (label){
							if (label.firstElementChild.checked){
								arr.textContent += label.children[2].textContent + ', ';
							}
						});
						arr.textContent = arr.textContent.substr(0,arr.textContent.length - 2);
					}
				})
			})
		}

	}
	showHideRegUser(form){
		let cont = form.parentElement;
		form.classList.toggle('active');
		cont.classList.toggle('active');
	}
	
	addNewFields(clickData){
		const _ = this;
		let addBlock = document.querySelector('.contacts-add');
		if(addBlock) {
			let button = clickData.item;
			if(button.getAttribute("data-info") === 'email'){
				let tpl = _.getAddTpl();
				tpl.querySelector('h5').textContent = 'Email';
				tpl.querySelector('.add-plus').setAttribute('data-info','email');
				let cont = document.querySelector('.add-col-first');
				cont.append(tpl);
			} else {
				let tpl = _.getAddTpl();
				tpl.querySelector('h5').textContent = 'Slack token';
				tpl.querySelector('.add-row').append(_.el('SPAN',{'class': 'add-star','text':'*'}));
				tpl.querySelector('input').placeholder = 'erg43h5475ithfe534y435y45u6j3443ggg54h64j6j56';
				tpl.querySelector('.add-plus').remove();
				let tpl2 = _.getAddTpl();
				tpl2.querySelector('h5').textContent = 'Channel';
				let cont = document.querySelector('.add-col-last');
				cont.append(tpl,tpl2);
			}
			button.remove();
		}
	}
	getAddTpl(){
		const _ = this;
		let tpl = _.el('DIV',{'class' : 'add-block','childes' : [
				_.el('DIV',{'class' : 'add-row','childes' : [
						_.el('H5',{'class' : 'add-title'})
					]
				}),
				_.el('DIV',{'class' : 'add-input-row','childes' : [
						_.el('INPUT',{'class' : 'add-input','type' : 'text'}),
						_.el('BUTTON',{'class' : 'add-plus','type' : 'button'})
					]
				})
			]
		});
		let btn = tpl.querySelector('.add-plus');
		btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4.125 6H7.875" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 4.125V7.875" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>`;
		btn.addEventListener('click',function(e) {
			e.preventDefault();
			_.addNewFields({
				'event' : e, 'item' : this
			})
		});
		_.addTpl = tpl;
		return tpl;
	}
	el(tag,params = {}){
		const _ = this;
		if (!tag) return null;
		let
		childes =  params['childes'] ?  params['childes']: null;
		delete params['childes'];
		let temp = document.createElement(tag);
		if (tag == 'temp'){
			temp = document.createDocumentFragment();
		}
		if(params){
			for(let key in params){
				if(key === 'text') {
					if( (tag === 'INPUT') || (tag === 'TEXTAREA') ) temp.value = params[key];
					else temp.textContent = params[key];
				} else if(key === 'html') temp.innerHTML = params[key];
				else temp.setAttribute(`${key}`,`${params[key]}`);
			}
		}
		if(  (childes instanceof  Array) && (childes.length) ) {
			childes.forEach(function (el) {
				temp.append(el);
			});
		}
		return temp;
	}
	
	fqShow(clickData){
		const _ = this;
		let fqBlock = document.querySelector('.fq');
		if(fqBlock) {
			let block = clickData.item.parentElement;
			let list = block.querySelector('.item-list');
			block.classList.toggle('active');
			if(block.classList.contains('active')){
				let height = list.getAttribute('data-height');
				list.setAttribute('style',`height:${height}px`);
			} else {
				list.removeAttribute('style')
			}
		}
	}
	fqHeightCheck() {
		const _ = this;
		let fqBlock = document.querySelector('.fq');
		if(fqBlock) {
			let lists = fqBlock.querySelectorAll('.item-list');
			lists.forEach(function(list) {
				let maxHeight = 0;
				let items = list.childNodes;
				items.forEach(function(item) {
					let h = 0;
					let inners = item.childNodes;
					inners.forEach(function(inner) {
						if(!isNaN(inner.offsetHeight)) {
							h += inner.offsetHeight;
							window.innerWidth < 1200 ? h += 10 : h+= 15;
						}
					});
					if(h > maxHeight) maxHeight = h;
				});
				if(items.length > 3) maxHeight += 20;
				list.setAttribute('data-height',`${maxHeight}`)
			})
		}
	}

	asideShowHide(){
		const _ = this;
		let aside = document.querySelector('.aside');
		if (aside.classList.contains('active')){
			aside.scroll(0,0);
			aside.classList.remove('active');
			localStorage.setItem('asidePosition','disactive')
		} else {
			aside.classList.add('active');
			localStorage.setItem('asidePosition','active')
		}
	}
	asideLoad(){
		let aside = document.querySelector('.aside');
		if (aside){
			if (localStorage.getItem('asidePosition') === 'active') aside.classList.add('active');
		}
	}

	benefitsShowHide(){
		const _ = this;
		let login = document.querySelector('.main>.login'),
				benefits = document.querySelector('.main>.benefits');
		login.classList.toggle('active');
		if (login.classList.contains('active')) benefits.classList.remove('active');
		else benefits.classList.add('active')
	}
	regFormShowHide(){
		const _ = this;
		let loginForm = document.querySelector('.main .login-form'),
				regForm = document.querySelector('.main #registration-form');
		loginForm.classList.toggle('active');
		if (loginForm.classList.contains('active')) regForm.classList.remove('active');
		else regForm.classList.add('active')
	}
	forgotFormShowHide(){
		const _ = this;
		let loginForm = document.querySelector('.main .login-form'),
				forgotForm = document.querySelector('.main #forgot-form');
		loginForm.classList.toggle('active');
		if (loginForm.classList.contains('active')) forgotForm.classList.remove('active');
		else forgotForm.classList.add('active')
	}
	setTableWidth(){
		let table = document.querySelector('.table');
		if (!table) return;
		if (window.innerWidth < 1200){
			table.children[0].setAttribute('style',`width:${(table.children[1].firstElementChild.children.length * 150) - 50}px`)
			table.children[1].setAttribute('style',`width:${(table.children[1].firstElementChild.children.length * 150) - 50}px`)
		} else {
			table.children[0].removeAttribute('style');
			table.children[1].removeAttribute('style');
		}
	}



	init(){
		const _ = this;
		_.fqHeightCheck();
		_.asideLoad();
		_.setTableWidth();
		_.handlers();
	}
}
let front = new Front();