/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * @class
 * @param {Number} _x
 * @param {Number} _y
 * Constructor
 */
cc.Point = function (_x, _y) {
    this.x = _x || 0;
    this.y = _y || 0;
};

/**
 * @function
 * @param {cc.Point} point1
 * @param {cc.Point} point2
 * @return {Boolean}
 * Constructor
 */
cc.Point.CCPointEqualToPoint = function (point1, point2) {
    return ((point1.x == point2.x) && (point1.y == point2.y));
};

/**
 * @class
 * @param {Number} _width
 * @param {Number} _height
 * Constructor
 */
cc.Size = function (_width, _height) {
    this.width = _width || 0;
    this.height = _height || 0;
};

/**
 * @function
 * @param {cc.Size} size1
 * @param {cc.Size} size2
 * @return {Boolean}
 * Constructor
 */
cc.Size.CCSizeEqualToSize = function (size1, size2) {
    return ((size1.width == size2.width) && (size1.height == size2.height));

};

/**
 * @class
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} width1
 * @param {Number} height1
 * Constructor
 */
cc.Rect = function (x1, y1, width1, height1) {
    switch (arguments.length) {
        case 0:
            this.origin = cc.p(0, 0);
            this.size = new cc.Size(0, 0);
            break;
        case 1:
            var oldRect = x1;
            if (!oldRect) {
                this.origin = cc.p(0, 0);
                this.size = new cc.Size(0, 0);
            } else {
                if (oldRect instanceof cc.Rect) {
                    this.origin = cc.p(oldRect.origin.x, oldRect.origin.y);
                    this.size = new cc.Size(oldRect.size.width, oldRect.size.height);
                } else {
                    throw "unknown argument type";
                }
            }
            break;
        case 2:
            this.origin = x1 ? cc.p(x1.x, x1.y) : cc.p(0, 0);
            this.size = y1 ? new cc.Size(y1.width, y1.height) : new cc.Size(0, 0);
            break;
        case 4:
            this.origin = cc.p(x1 || 0, y1 || 0);
            this.size = new cc.Size(width1 || 0, height1 || 0);
            break;
        default:
            throw "unknown argument type";
            break;
    }
};

/**
 * @function
 * @param {cc.Rect} rect1
 * @param {cc.Rect} rect2
 * @return {Boolean}
 * Constructor
 */
cc.Rect.CCRectEqualToRect = function (rect1, rect2) {
    return ((cc.Point.CCPointEqualToPoint(rect1.origin, rect2.origin)) &&
        (cc.Size.CCSizeEqualToSize(rect1.size, rect2.size)));
};

/**
 * return the rightmost x-value of 'rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMaxX = function (rect) {
    return (rect.origin.x + rect.size.width);
};

/**
 * return the midpoint x-value of 'rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMidX = function (rect) {
    return ((rect.origin.x + rect.size.width) / 2.0);
};
/**
 * return the leftmost x-value of 'rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMinX = function (rect) {
    return rect.origin.x;
};

/**
 * Return the topmost y-value of `rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMaxY = function (rect) {
    return(rect.origin.y + rect.size.height);
};

/**
 * Return the midpoint y-value of `rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMidY = function (rect) {
    return rect.origin.y + rect.size.height / 2.0;
};

/**
 * Return the bottommost y-value of `rect'
 * @function
 * @param {cc.Rect} rect
 * @return {Number}
 * Constructor
 */
cc.Rect.CCRectGetMinY = function (rect) {
    return rect.origin.y;
};

/**
 * @function
 * @param {cc.Rect} rect
 * @param {cc.Point} point
 * @return {Boolean}
 * Constructor
 */
cc.Rect.CCRectContainsPoint = function (rect, point) {
    var ret = false;
    if (point.x >= cc.Rect.CCRectGetMinX(rect) && point.x <= cc.Rect.CCRectGetMaxX(rect)
        && point.y >= cc.Rect.CCRectGetMinY(rect) && point.y <= cc.Rect.CCRectGetMaxY(rect)) {
        ret = true;
    }
    return ret;
};

/**
 * @function
 * @param {cc.Rect} rectA
 * @param {cc.Rect} rectB
 * @return {Boolean}
 * Constructor
 */
cc.Rect.CCRectIntersectsRect = function (rectA, rectB) {
    return !(cc.Rect.CCRectGetMaxX(rectA) < cc.Rect.CCRectGetMinX(rectB) ||
        cc.Rect.CCRectGetMaxX(rectB) < cc.Rect.CCRectGetMinX(rectA) ||
        cc.Rect.CCRectGetMaxY(rectA) < cc.Rect.CCRectGetMinY(rectB) ||
        cc.Rect.CCRectGetMaxY(rectB) < cc.Rect.CCRectGetMinY(rectA));
};

/**
 * @function
 * @param {cc.Rect} rectA
 * @param {cc.Rect} rectB
 * @return {Boolean}
 * Constructor
 */
cc.Rect.CCRectOverlapsRect = function (rectA, rectB) {
    if (rectA.origin.x + rectA.size.width < rectB.origin.x) {
        return false;
    }
    if (rectB.origin.x + rectB.size.width < rectA.origin.x) {
        return false;
    }
    if (rectA.origin.y + rectA.size.height < rectB.origin.y) {
        return false;
    }
    if (rectB.origin.y + rectB.size.height < rectA.origin.y) {
        return false;
    }
    return true;
};

/**
 * Returns the smallest rectangle that contains the two source rectangles.
 * @function
 * @param {cc.Rect}　rectA
 * @param {cc.Rect}　rectB
 * @return {cc.Rect}
 * Constructor
 */
cc.Rect.CCRectUnion = function (rectA, rectB) {
    var rect = new cc.Rect(0, 0, 0, 0);
    rect.origin.x = Math.min(rectA.origin.x, rectB.origin.x);
    rect.origin.y = Math.min(rectA.origin.y, rectB.origin.y);
    rect.size.width = Math.max(rectA.origin.x + rectA.size.width, rectB.origin.x + rectB.size.width) - rect.origin.x;
    rect.size.height = Math.max(rectA.origin.y + rectA.size.height, rectB.origin.y + rectB.size.height) - rect.origin.y;
    return rect
};

/**
 * Returns the overlapping portion of 2 rectangles
 * @function
 * @param {cc.Rect} rectA
 * @param {cc.Rect} rectB
 * @return {cc.Rect}
 * Constructor
 */
cc.Rect.CCRectIntersection = function (rectA, rectB) {
    var intersection = new cc.Rect(
        Math.max(cc.Rect.CCRectGetMinX(rectA), cc.Rect.CCRectGetMinX(rectB)),
        Math.max(cc.Rect.CCRectGetMinY(rectA), cc.Rect.CCRectGetMinY(rectB)),
        0, 0);

    intersection.size.width = Math.min(cc.Rect.CCRectGetMaxX(rectA), cc.Rect.CCRectGetMaxX(rectB)) - cc.Rect.CCRectGetMinX(intersection);
    intersection.size.height = Math.min(cc.Rect.CCRectGetMaxY(rectA), cc.Rect.CCRectGetMaxY(rectB)) - cc.Rect.CCRectGetMinY(intersection);
    return intersection
};

/**
 * @function
 * @param {Number} x
 * @param {Number} y
 * @return {cc.Point}
 * Constructor
 */
cc.PointMake = function (x, y) {
    return new cc.Point(x, y);
};

/**
 * @function
 * @param {Number} width
 * @param {Number} height
 * @return {cc.Size}
 * Constructor
 */
cc.SizeMake = function (width, height) {
    return new cc.Size(width, height);
};

/**
 * @function
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @return {cc.Rect}
 * Constructor
 */
cc.RectMake = function (x, y, width, height) {
    return new cc.Rect(x, y, width, height);
};

/**
 * The "left bottom" point -- equivalent to cc.p(0, 0).
 * @function
 * @return {cc.Point}
 * Constructor
 */
cc.PointZero = function () {
    return cc.p(0, 0)
};

/**
 * The "zero" size -- equivalent to cc.SizeMake(0, 0).
 * @function
 * @return {cc.Size}
 * Constructor
 */
cc.SizeZero = function () {
    return new cc.Size(0, 0)
};

/**
 * The "zero" rectangle -- equivalent to cc.RectMake(0, 0, 0, 0).
 * @function
 * @return {cc.Rect}
 * Constructor
 */
cc.RectZero = function () {
    return new cc.Rect(0, 0, 0, 0)
};

