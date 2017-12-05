package com.learnrn.View;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.drawable.GradientDrawable;
import android.util.AttributeSet;
import android.view.View;

/**
 * Created by zhaozx on 2017/12/4.
 * desc:
 */

public class LinearGardientButton extends View {


    private GradientDrawable gradientDrawable;

    private OrientationType type;//方向，这里仅仅定义4个方向
    private int startColor=0XFFff3300;
    private int endColr=0XFFff33ff;
    private OrientationType state;


    public LinearGardientButton(Context context) {
        super(context);
        init(context);
    }

    public LinearGardientButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    public LinearGardientButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context) {
        gradientDrawable = new GradientDrawable();
        setState(OrientationType.TOP_BOTTOM);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        gradientDrawable.setBounds(0, 0, getWidth(), getHeight());
        gradientDrawable.setColors(new int[]{startColor, endColr});
        gradientDrawable.draw(canvas);
        super.onDraw(canvas);
    }

    public void setState(OrientationType state) {
        this.state = state;
        switch (state){
            case  TOP_BOTTOM:
                gradientDrawable.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);
                break;
            case  BOTTOM_TOP:
                gradientDrawable.setOrientation(GradientDrawable.Orientation.BOTTOM_TOP);
                break;
            case  LEFT_RIGHT:
                gradientDrawable.setOrientation(GradientDrawable.Orientation.LEFT_RIGHT);
                break;
            case  RIGHT_LEFT:
                gradientDrawable.setOrientation(GradientDrawable.Orientation.RIGHT_LEFT);
                break;
        }
    }

    public void setStartColor(int startColor) {
        this.startColor = startColor;
    }

    public void setEndColr(int endColr) {
        this.endColr = endColr;
    }


    public static  enum  OrientationType{
        TOP_BOTTOM,
        BOTTOM_TOP,
        LEFT_RIGHT,
        RIGHT_LEFT

    }
}
