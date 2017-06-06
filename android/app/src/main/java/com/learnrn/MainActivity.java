package com.learnrn;

import android.util.Log;

import com.facebook.react.ReactActivity;

import zhaozx.JniTest;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        JniTest j = new JniTest();
        Log.e("我要成功", j.getPackname());
        return "LearnRN";
    }
}
