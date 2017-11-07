import React, {Component} from 'react';

var items = [];

var itemsContainer = document.getElementById('items-container');
var addButton = document.getElementById('add-button');
var nameInput = document.getElementById('name-input');
var surnameInput = document.getElementById('surname-input');

function saveItems(){
	var count = 0;
	for(var i = 0; i < items.length; i++){
		var item = items[i];
		if(!item.removed){
			item = {name: item.name, surname: item.surname};
			
			localStorage.setItem('item' + count, JSON.stringify(item));
			count++;
		}
	}
	
	localStorage.itemsCount = count;
}

function loadItems(){
	if(localStorage.itemsCount){
		for(var i = 0; i < localStorage.itemsCount; i++){
			var item = localStorage.getItem('item'+i);
			if(item){
				try {
					item = JSON.parse(item);
					items.push(item);
					
					buildItemHTML(item, items.length - 1);
				} catch(err){
					console.log('Unable to parse item', item, err);
				}
			}
		}
	}
}

function buildItemHTML(item, index){
	var div = document.createElement('DIV');
	div.className = 'item';
	
	var title = document.createElement('SPAN');
	title.innerText = item.name + ', ' + item.surname;
	
	var removeButton = document.createElement('BUTTON');
	removeButton.innerText = 'Remove'
	removeButton.onclick = function(){
		var item = items[index];
		item.removed = true;
		item.html.parentNode.removeChild(item.html);
		
		saveItems();
	};
	
	div.appendChild(title);
	div.appendChild(removeButton);
	
	item.html = div;
	
	itemsContainer.appendChild(div);
}

addButton.onclick = function(){
	var name = nameInput.value;
	var surname = surnameInput.value;
	
	var item = {name: name, surname: surname};
	items.push(item);
	
	buildItemHTML(item, items.length - 1);
	
	saveItems();
};

