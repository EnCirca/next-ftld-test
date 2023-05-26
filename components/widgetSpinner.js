import React, { useEffect } from "react";
import { MDBSpinner } from 'mdb-react-ui-kit';

const WidgetSpinner = (props) => {
    // spinner alignment
    let alignSpinClass = 'd-flex justify-content-center';
    if (props.align === 'left') {
        alignSpinClass = 'd-flex justify-content-left';
    }    
    // runs once with this sytax
    useEffect(() => {
        // wait for widget to load
        // detect window and mutation support
        if (window.MutationObserver) {
            // callback for mutations
            let observer = new MutationObserver(function (mutations) {
                // for every mutation
                mutations.forEach(function (mutation) {
                    // for every added element
                    mutation.addedNodes.forEach(function (node) {
                        if (node && (node.id === 'enc-canary-loading-finished')) {
                            let widgetSpinner = document.getElementById("enc-widget-spinner");
                            if (widgetSpinner) {
                                widgetSpinner.remove();
                            }
                        }
                    });
                });
            });
            //bind mutation observer to a specific element (probably a div somewhere)
            observer.observe(document.body, {childList: true, subtree: true});
        }
    }, []);
    // return rendered html
    return (
    <div id="enc-widget-spinner" className={alignSpinClass}>
        <MDBSpinner className="enc-widget-spinner">
            <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
    </div>
    )
}

export default WidgetSpinner;
