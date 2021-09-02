window.dom = {
    creat(string) { // Create nodes based on inputting string 
        const container = document.createElement('template'); //template标签可以容纳任意标签
        container.innerHTML = string.trim(); //去除字符串中的空格
        return container.content.firstChild;
    },
    after(node_next, node) {
        return node.parentNode.insertBefore(node_next, node.nextSibling)
    },
    before(node_previous, node) {
        return node.parentNode.insertBefore(node_previous, node)
    },
    append(child, node) {
        return node.appendChild(child)
    },
    wrap(parent, node) {
        dom.before(parent, node)
        dom.append(node, parent)
    },
    remove(node) {
        node.parentNode.removeChild(node)
    },
    empty(node) {
        let x = node.firstChild
        while (x) {
            dom.remove(x)
            x = node.firstChild
        }
    },
    attr(node, name, value) {  // 重载
        if (arguments.length === 2) {
            console.log('Value of', node, '.', name, ':', node.getAttribute(name))
        }
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        }

    },
    text(node, string) { //适配不同浏览器
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        }
        else if (arguments.length === 1) {
            if ('innerText' in node) {
                console.log('Text of', node, 'is:', node.innerText)
            } else {
                console.log('Text of', node, 'is:', node.textContent)
            }
        }
    },
    html(node, string) {
        if (arguments.length === 1) {
            console.log('Html of', node, 'is:', node.innerHTML)
        }
        if (arguments.length === 2) {
            node.innerHTML = string
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div, 'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            //dom.style(div, 'color')

            if (typeof (name) === 'string') {
                console.log(name, ':', node.style[name])
            } else if (name instanceof Object) {
                //dom.style(div, {color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    sibling(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};

