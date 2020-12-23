class Front {
	constructor (){
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
		_.init();
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
	
	
	
	init(){
		const _ = this;
	}
}
let front = new Front();