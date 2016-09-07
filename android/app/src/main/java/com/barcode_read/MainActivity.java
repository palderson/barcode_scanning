package com.barcode_read;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;

public class ScanTabActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getScanTabComponentName() {
        return "barcode_read";
    }
}
