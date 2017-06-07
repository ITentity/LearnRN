package zhaozx;

/**
 * Created by zhaozx on 2017/6/6.
 * desc:
 */

public class JniTest {
    /**
     * 将用C++代码实现，在android代码中调用的方法：获取当前app的包名
     * @return
     */
    public static native String getPackname();

    /**
     * 加载so库或jni库，在使用到该库之前加载就行，不一定非要写在这个类内
     * 系统自己会判断扩展名是dll还是so,这里加载libapp.so
     */
    static {
        System.loadLibrary("app");
    }
}
