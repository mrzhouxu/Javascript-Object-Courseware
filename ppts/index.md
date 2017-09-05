```markdown
title: 面向对象的程序设计
speaker: 周旭
url: nodeppt start -p 5210 -w    /?_multiscreen=1
transition: zoomin
headFiles:/css/demo.css,/css/index.css
files: /js/demo.js,/js/zoom.js,/js/index.js
theme: moon //皮肤 colors-moon-blue-dark-green-light
date: 2017年8月18日

[slide]
<h1 style="position:absolute;top:5em;">面向对象(Object-Oriented,OO)的程序设计</h1>
<h2 style="text-align:right;margin-right:5em;">By 周旭</h3>
<div class="help">因为Javascript的Object模型很独特，和其他语言都不一样，不太容易掌握。
这是我的学习笔记，希望对大家学习这一部分有所帮助。讲的东西比较简单，大家应该都可以听得懂！</div>

[slide]
* 理解对象
	* { } 与 new Object( )
	* 属性类型
		* 数据属性
			* [[ Configurable ]]
			* [[ Enumerable ]]
			* [[ Writable ]]
			* [[ Value ]]
		* 访问器属性
			* [[ Configurable ]]
			* [[ Enumerable ]]
			* [[ Get ]]
			* [[ Set ]]
	* 定义多个属性
	* 读取属性的特性

[slide]
面向对象的语言有一个标志，那就是他们都有类、接口的概念，而通过类可以创建任意多个具有相同属性和方法的对象。
<br><br>但是，在ECMAScript中没有类的概念，他的对象也与基于类的对象有所不同。
<br><br>
# ECMA-262把对象定义为   {:&.flexbox.vleft}
	> ###无序属性的集合，其属性可以包含基本值、对象或者函数。

<br>
对象的每个属性和方法都有一个名字，而每个名字都映射一个值。我们可以把对象想象成散列表：名值对，其中值可以是数据或函数。


[slide]
## `Object`
----
<div>
	<pre><code class="javascript" contenteditable="true" id="code1">
	    var result = '';
		var person = new Object();
		person.name = "ZhouXu";
		person.age = 21;
		person.job = "Front end Engineer"

		person.sayName = function(){
			result = this.name;
		}

		person.sayName();
	</code></pre>
</div>
<button class="btn btn-default" onclick="run('code1','result1')">执行</button> {:&.pull-right}

	
result：<span id="result1">waiting</span>
----
## `对象字面量`
<div>

<pre><code class="javascript"  contenteditable="true" id="code2">
    var result = '';
    var person = {
    	name:"ZhouXu",
    	age:21,
    	job:"Front end Engineer",
    	sayName:function(){
    		result = this.name;
    	}
    };
    person.sayName();
</code></pre>
</div>
<button class="btn btn-default" onclick="run('code2','result2')">执行</button> {:&.pull-right}

result：<span id="result2">waiting</span>
----


[slide]
## `Object`
----
<div>
	<pre><code class="javascript" contenteditable="true" id="code3">
		console.time('OB耗时：');
		for(var i = 0 ; i < 10000 ; i ++){
			var person = new Object();
			person.name = "ZhouXu";
			person.age = 21;
			person.job = "Front end Engineer"

			person.sayName = function(){
				result = this.name;
			}
		}
		console.timeEnd('OB耗时：');
	</code></pre>
</div>
<button class="btn btn-default" onclick="run('code3','result3')">执行</button> {:&.pull-right}
<span id="result3"></span>
----
## `对象字面量`
<div>
<pre><code class="javascript"  contenteditable="true" id="code4">
		console.time('ST耗时：');
		for(var i = 0 ; i < 10000 ; i ++){
			var person = {
				name : "ZhouXu",
				age : 21,
				job : "Front end Engineer",
				sayName : function(){
					result = this.name
				}
			}
		}    
		console.timeEnd('ST耗时：');

</code></pre>
</div>
<div class="help">
大家知道为什么吗？
大家有没有想过，为什么使用对象字面量这样就比你new Object()来的好。
{}代表字面量，可以立即求值，而Object是什么，是一个内置的对象，new Object()本质上是方法的调用，既然是方法调用，就涉及到在proto链中遍历该方法，当找到该方法后，又会生成方法调用必须的堆栈信息，方法调用结束后，还要释放该堆栈。
这就是对象字面量赋值比new Object()高效的原因。
创建数组也是这样
</div>
<button class="btn btn-default" onclick="run('code4','result4')">执行</button> {:&.pull-right}
<span id="result4"></span>
----

[slide]
[magic data-transition="earthquake"]
<div class="help">
ECMAScript中有两种属性：数据属性和访问器属性
这些属性都是内部属性，一般都用[[ ]]两个中括号括起来，这些属性不和平时的属性一样可以通过 对象名.属性名 访问，这些是定义只有内部才用的特性，因此在JavaScript中不能直接访问他们。
</div>
* <h1 style="width:200px;">属性类型</h1> <div class="help">内部属性</div>
	* ## 数据属性
	* ## 访问器属性
====
[/magic]
[slide]
# 数据属性   {:&.flexbox.vleft}
	> ### 数据属性包含一个数据值的位置，在这个位置可以读取和写入。

<br>
# 访问器属性   
	> ### 访问器属性不包含数据值，包含一对getter和setter函数。

<div style="height:40%;visibility:hidden"></div>
[slide]
## 数据属性
属性名 | 值 | |
:-------:|:------:|:-------:|--------
[[ Configurable ]] | true/false | 可配置的
[[ Enumerable ]] | true/false | 可列举的
[[ Writable ]] | true/false | 可写的
[[ Value ]] | underfined | 值
---
## 访问器属性
属性名 | 值 | |
:-------:|:------:|:-------:|--------
[[ Configurable ]] | true/false | 可配置的
[[ Enumerable ]] | true/false | 可列举的
[[ Get ]] | underfined | 读取
[[ Set ]] | underfined | 写入
&nbsp;
---

 >  ###访问器属性不能直接定义，必须使用Object.defineProperty()来定义。

[slide]
<h1 >数据属性</h1>
### Object.getOwnPropertyDescriptor(Object,Property);
----
<div class="help">
Object.getOwnPropertyDescriptor(window,'str');//true true true false
Object.getOwnPropertyDescriptor(person,'name');//true true true true
configurable:false;  老版本抛错
writable;
delete();

</div>
<div>
<pre><code class="javascript"  contenteditable="true" id="code5">
var person = { name : 'zhangsan' };
result = Object.getOwnPropertyDescriptor(person,'name');
result = JSON.stringify(result);
//Object.defineProperty(person,'name',{
//	writable:false
//})
//person.name = "lisi";
//result = person.name;

</code></pre>
</div>
<p style="text-align:left;font-size:21px;">result：<span id="result5">waiting</span></p>
<button class="btn btn-default" onclick="run('code5','result5')">执行</button> {:&.pull-right}

<br></br>
<div>
<pre><code class="javascript"  contenteditable="true" id="code6">
var person = new Object();
person.name = 'zhangsan';
result = Object.getOwnPropertyDescriptor(person,'name');
result = JSON.stringify(result);

</code></pre>
</div>
<p style="text-align:left;font-size:21px;">result：<span id="result6">waiting</span></p>
<button class="btn btn-default" onclick="run('code6','result6')">执行</button> {:&.pull-right}

[slide]
<div class="help">
value / get set
name 和 _name  不能重名 会覆盖
访问器属性不指定默认都是false


</div>
<h1 >访问器属性</h1>
<div>
<pre><code class="javascript"  contenteditable="true" id="code7">
var person = { _name : 'zhangsan' };
Object.defineProperty(person,'name',{
	get:function(){
		return this._name;
	},
	set:function(val){
		this._name = val;
	}
});
console.log(Object.getOwnPropertyDescriptor(person,'name'));

</code></pre>
</div>
<p style="text-align:left;font-size:21px;" class="help">result：<span id="result7">waiting</span></p>
<button class="btn btn-default" onclick="run('code7','result7')">执行</button> {:&.pull-right}

<br>
<div>
<pre><code class="javascript"  contenteditable="true">
person.__defineGetter__("name",function(){
	return this._name;
});
person.__defineSetter__("name",function(val){
	this._name = val;
})

</code></pre>
</div>

[slide]
# 定义多个属性
## Object.defineProperties(Object,Property-Object)
----
<div>
<pre><code class="javascript"  contenteditable="true">
var person = {};
Object.defineProperties(person,{
	_name:{
		value:'zhangsan'
	},
	age:{
		value:21
	},
	position:{
		value:'Boss'
	},
	name:{
		get:function(){
			return this._name;
		},
		set:function(value){
			this._name = value;
		}
	}
});

</code></pre>
</div>

[slide]
<div class="help">之前说的两种方式只适合用来创建单一的对象，他们有个明显的缺点：使用同一个接口创建很多对象，会产生大量的重复代码。</div>
* # 创建对象
	* ## 工厂模式
	* ## 构造函数模式
	* ## 原型模式
	* ## 组合使用构造函数模式和原型模式
	* ## 动态原型模式
	* ## 寄生构造函数模式
	* ## 稳妥构造函数模式

[slide]
# 工厂模式
	> #### 这种模式抽象了创建具体对象的过程。用函数来封装以特定接口创建对象的细节。

----
<div>
<pre><code class="javascript"  contenteditable="true">
function createPerson(name,age,job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	}
	return o;
}
var person1 = createPerson("ZhangSan",29,"Doctor");
var person2 = createPerson("LiSi",21,"Teacher");

</code></pre>
</div>
> #### 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题。

<div class="help">什么是对象识别问题？createCat 和 createDog 创建的对象都是Object类型。
工厂模式缺点：创建的对象都是Object类型
</div>

[slide]
# 构造函数模式
	> #### 像Object、Array一样的原生构造函数一样，在运行时会自动出现在执行环境中。

----
<div>
<pre><code class="javascript"  contenteditable="true">
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	};
}
var person1 = new Person("ZhangSan",20,"Doctor");
var person2 = new Person("LiSi",21,"Teacher");

</code></pre>
</div> 
* 不同点
	* 没有new Object()
	* 直接将属性和方法赋给了this对象
	* 没有return语句
<div class="help">按照惯例,构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头。</div>
<div class="help">要创建Person的新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤
1.创建一个新对象；
2.将构造函数的作用域赋给新对象(因此this就只想了这个新对象)；
3.执行构造函数中的代码(为这个对象添加属性)；
4.返回新对象。
</div>

[slide]
# 检查
<div>
<pre><code class="javascript"  contenteditable="true">
person1.constructor == Person;//true
person2.constructor == Person;//true

person1 instanceof Object;//true
person1 instanceof Person;//true
person2 instanceof Object;//true
person2 instanceof Person;//true

</code></pre>
</div> 
<div class="help">constructor构造函数属性 instanceof是个操作符，专门用来检测对象类型  
构造函数模式胜过工厂模式的地方在于可以将实例标识为一种特定的类型。也就是说new一个Person他就是Person类型了
在这里 person1 和 person2 之所以同时是 Object 的实例，是因为所有对象都继承 Object 。
</div>

[slide]
<div class="help">构造函数与其他函数的唯一区别，就在于调用他们的方式不同。任何函数，只要通过new操作符来调用，那它就可以作为构造函数。</div>
<div>
<pre><code class="javascript"  contenteditable="true">
//当构造函数使用
var person = new Person("ZhangSan",20,"Doctor");
person.sayName();//"ZhangSan"

//作为普通函数调用
Person("ZhangSan",20,"Doctor");//this 指向window对象
window.sayName();//"Zhangsan"

//在另一个对象的作用域中调用
var o = new Object();
Person.call(o,"ZhangSan",20,"Doctor");
o.sayName();//ZhangSan

var o = new Object();
Person.apply(o,["ZhangSan",20,"Doctor"]);
o.sayName();//ZhangSan

</code></pre>
</div> 
<div class="help">
构造函数模式缺点：他的每个方法都要在每个实例上重新创建一遍。比如在之前例子中，person1和person2都有一个sayName()方法，但这两个方法不是同一个方法。
而在ECMAScript中，函数也是对象，因此定义一个函数，也就是实例化了一个对象。
所以之前的sayName方法相当于 this.sayName = new Function(){alert(this.name)};
我们来证明一下 person1.sayName == person2.sayName  //false
</div>

[slide]
<div>
<pre><code class="javascript"  contenteditable="true">
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName(){
	alert(this.name);
}
var person1 = new Person("ZhangSan",20,"Doctor");
var person2 = new Person("LiSi",21,"Teacher");

</code></pre>
</div> 
<div class="help">我们这样，把sayName()函数的定义转移到了构造函数外部。而在构造函数内部，我们将sayName属性设置成等于全局的sayName函数。
这样sayName包含的是一个指向函数的指针。因此person1和person2对象就共享了全局作用于中定义的sayName()函数。
现在 person1.sayName == person2.sayName  //true
</div>
<div class="help">
这样做虽然解决了两个函数做同一件事的问题，但是这样的话  这个全局函数就有点名副其实了
什么是全局函数？公共函数，供全局调用的函数，所有人都可以调用。
如果对象需要定义很多方法，那么就要定义很多个全局函数，那么我们定义的这个引用类型就没有一点封装性了。
不过，这些问题可以通过使用原型模式来解决。
</div>

[slide]
# 原型模式
	> ### 我们创建的每个函数都有一个prototype(原型)属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
<div class="help">也可以说，prototype 就是通过调用构造函数而创建的那个对象实例的原型对象。</div>

<div style="visibility:hidden;" >""</div>
	> ### 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

----
<div>
<pre><code class="javascript"  contenteditable="true" id="code8">
function Person(){
	
}
Person.prototype.name = "ZhangSan";
Person.prototype.age = 29;
Person.prototype.job = "Doctor";
Person.prototype.sayName = function(){
	alert(this.name);
};

var person1 = new Person();
//person1.sayName(); //"ZhangSan"

var person2 = new Person();
//person2.sayName(); //"ZhangSan"

result = person1.sayName == person2.sayName;

</code></pre>
</div> 
<p >result：<span id="result8">waiting</span></p>
<button class="btn btn-default" onclick="run('code8','result8')">执行</button> {:&.pull-right}
<div class="help">在这里，我们将sayName()方法和所有属性直接添加到了Person的prototype属性中，这样我们调用构造方法来创建新对象，新对象会具有相同的属性和方法。
这样 person1 和 person2 访问的都是同一组属性和同一个sayName()函数。
</div>

[slide]
# 原型
	> ### 无论什么时候，只要创建了一个新的函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象。

<div class="help">在默认情况下，所有原型对象都会自动获得一个 constructor(构造函数)属性，这个属性包含一个指向 prototype 属性所在函数 的指针，例如前面的例子，Person.prototype.constructor 指向Person。通过这个构造函数，可以继续为原型对象添加其他的属性和方法。</div>
----
![](/img/Prototype.png)

我们在所有的视线中都无法访问[[Prototype]]，但可以通过isPrototypeOf()来确定对象嘴贱是否存在这种关系。

Person.prototype.isPrototypeOf(person1);//true
Person.prototype.isPrototypeOf(person2);//true

Object.getPrototypeOf();//返回这个对象的原型
Object.getPrototypeOf(person1) == Person.prototype; //true
Object.getPrototypeOf(person1).name;//

每当代码兑取某个对象的某个属性时，都会执行一次搜索，搜索给定名字的属性。
搜索有个顺序 先从对象实例本山开始  找到了返回该属性的值，如果没有找到，则继续搜索指针指向的原型对象。也就是搜索两次
第一次搜索属于自己的属性，第二次搜索原型里面的属性，这正是多个对象实例共享原型所保存的属性和方法的基本原理。


缺点：如果我们创建的属性与实例原型中的属性同名，那么原型中的属性将会被屏蔽。
像这样：
function Person(){
	
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
}
var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
alert(person1.name);//Greg   来自实例
alert(person2.name);//Nocholas    来自原型

delete person1.name; //删除

alert(person1.name);//Nocholas   来自实例
alert(person2.name);//Nocholas    来自原型

hasOwnProperty();//检测一个属性是存在于实例中，还是存在于原型中。true/false   实例/原型


[slide]
# 原型与in操作符
有两种方式使用in操作符：单独使用和在for-in循环中使用。
在单独使用时，in操作符会在通过对象能够访问给定属性时返回true，不论属性存在于实例还是原型中。
function Person(){
	
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
}
var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty("name"));//false 原型
alert("name" in person1);//true 

Object.keys //返回一个包含所有可枚举属性的字符串数组
function Person(){
	
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
}
var keys = Object.keys(Person.prototype);
alert(keys);//"name,age,job,sayName"
Object.keys //如果是通过实例调用，则不包含原型属性
var p1 = new Person();
p1.name = "ZhangSan";
p1.age = 31;
var p1keys = Object.keys(p1);
alert(p1keys);//"name,age"
Object.getOwnPropertyNames();//不可枚举的constructor也可以列举出来

[slide]
更简单的原型语法
用一个包含所有属性和方法的对象字面量来重写整个原型对象。
function Person(){}
Person.prototype = {
	name:"ZhangSan",
	age:21,
	job:'Software Englineer',
	sayName:function(){
		alert(this.name);
	}
}
我们将Person.prototype设置为等于一个以对象字面量形式创建的新对象。
最终结果相同，但是 在这里 constructor属性不再指向Person了。
因为没创建一个函数，就会同时创建他的prototype对象，这个对象会自动火鹤constructor属性。
而这里我们以对象字面量形式完全重写了默认的prototype对象，因此constructor属性也就变成了新对象的constructor属性。（指向Object构造函数）不再指向Person函数。

var person1 = new Person();
alert(person1.constructor == Person);//false
alert(person1.constructor == Object);//true
如果想让他constructor属性指向Person
function Person(){}
Person.prototype = {
	constructor:Person,
	name:"ZhangSan",
	age:21,
	job:'Software Englineer',
	sayName:function(){
		alert(this.name);
	}
}

[slide]
原型的动态性
var friend = new Person();
Person.prototype.sayHi = function(){
	alert("Hi!");
};
friend.sayHi();//"Hi!"

----
function Person(){}
var friend = new Person();
Person.prototype = {
	constructor:Person,
	name:"ZhangSan",
	age:29,
	job:"Software Engineer",
	sayName:function(){
		alert(this.name);
	}
}
friend.sayName();//error

![](/img/friendPerson.png)

从图中可以看出，重写原型对象切断了现有原型与任何之前存在的对象实例之间的联系；他们引用的仍然是最初的原型。

[slide]
原生对象的原型
像Object、Number、String等原生的对象，如果里面没有你想要的方法你可也修改他们的原型，可以随时添加方法。
String.prototype.startsWith = function(text){
	return this.indexOf(text) == 0;
}
var msg = "Hello world!";
alert(msg.startsWith("Hello"));//true


[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]
[slide]