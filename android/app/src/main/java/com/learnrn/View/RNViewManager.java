package com.learnrn.View;

import android.graphics.Color;
import android.support.annotation.Nullable;
import android.widget.Toast;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.Map;

/**
 * Created by zhaozx on 2017/12/4.
 * desc:
 */

public class RNViewManager extends SimpleViewManager<LinearGardientButton> {

    public static final String REACT_CLASS = "MYImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public LinearGardientButton createViewInstance(ThemedReactContext reactContext) {
        Toast.makeText(reactContext, "createViewInstance", Toast.LENGTH_LONG).show();
        return new LinearGardientButton(reactContext);
    }

    @ReactProp(name = "startColor")
    public void setStartColor(LinearGardientButton view, @Nullable String startColor) {
        view.setStartColor(Color.parseColor(startColor));
    }

    @ReactProp(name = "endColor")
    public void setEndColor(LinearGardientButton view, @Nullable String endColor) {
        view.setStartColor(Color.parseColor(endColor));
    }

    @ReactProp(name = "orentation")
    public void orientation(LinearGardientButton view, @Nullable int orentation) {
        if (orentation == 1) {
            view.setState(LinearGardientButton.OrientationType.TOP_BOTTOM);

        } else if (orentation == 2) {
            view.setState(LinearGardientButton.OrientationType.BOTTOM_TOP);

        } else if (orentation == 3) {
            view.setState(LinearGardientButton.OrientationType.LEFT_RIGHT);

        } else {
            view.setState(LinearGardientButton.OrientationType.RIGHT_LEFT);

        }
    }


    public void receiveCommand(LinearGardientButton root, int commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);
    }


    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return super.getCommandsMap();
    }

}
