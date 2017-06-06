//
// Created by Apple on 2017/6/6.
//
#include <stdio.h>
#include <jni.h>
#include <stdlib.h>
#include "zhaozx_JniTest.h"

JNIEXPORT jstring JNICALL Java_zhaozx_JniTest_getPackname (JNIEnv *env, jclass cls){
    return (env)->NewStringUTF((char *)"Hello from JNI !");
}