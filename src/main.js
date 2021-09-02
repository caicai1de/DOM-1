// 增
const div1 = dom.creat('<div> 在已有节点后创建一个节点.</div>');
dom.after(div1, src_2);

const div2 = dom.creat('<div> 在已有节点前创建一个节点.</div>');
dom.before(div2, src_1);

const div3 = dom.creat('<div> 新增子节点.</div>');
dom.append(div3, div1);

const div4 = dom.creat('<div> 新增父节点.</div>');
dom.wrap(div4, div2);


// 删
const div5 = dom.creat('<div> 删节点.</div>');
dom.before(div5, div3);
dom.remove(div5)

const div6 = dom.creat('<div> 删后代.</div>');
dom.append(div6, div3);
dom.empty(div3)


// 改
const div7 = dom.creat('<div> 删后代.</div>');
dom.after(div7, div1);
dom.attr(div7, 'title', 'This is a title.');  //读写属性
dom.attr(div7, 'title');

dom.text(div7, 'try to add text'); //该写文本内容
dom.text(div7);

dom.html(div7);

const div8 = dom.creat("<div id='test'>good luck!</div >"); //读写style
dom.after(div8, div7);
dom.style(test, { border: '1px', color: 'red' });
dom.style(test, 'color');

dom.class.add(test, 'class1');  //读写查类名
dom.class.add(test, 'class2');
dom.class.remove(test, 'class2');
console.log(dom.class.has(test, 'class1'));

const fn = () => {   // 监听事件的增删
    console.log('鼠标点击了一次。')
}
dom.on(test, 'click', fn);
dom.off(test, 'click', fn);


// 查
console.log(dom.find('#test'));  //获取便签，可查找设置范围
console.log(dom.find('#test', body));

const ll = dom.find(l1)[0]
dom.sibling(ll);  //获取父类元素、子类元素、同级元素、前后元素、遍历节点、获取名次
dom.next(ll);