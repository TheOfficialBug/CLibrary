// scripts.js
const currencyData = {
    rupee: {
        symbol: '₹',
        plans: {
            premium: {
                amount: '1,35,000',
                original: '1,75,000',
                features: [
                    '25% Discount',
                    '100% Upfront',
                    'Course Switching Option',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            platinum: {
                amount: '1,40,000',
                original: '1,75,000',
                features: [
                    '20% Discount',
                    '40% Downpayment ₹56,000',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            basic: {
                amount: '1,45,000',
                original: '1,75,000',
                features: [
                    '18% Discount',
                    'Monthly ₹14,500',
                    'For 10 months',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            }
        }
    },
    dollar: {
        symbol: '$',
        plans: {
            premium: {
                amount: '2099',
                original: '2,299',
                features: [
                    '20% Discount',
                    '100% Upfront',
                    'Course Switching Option',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            platinum: {
                amount: '2,249',
                original: '2,599',
                features: [
                    '25% Discount',
                    '40% Downpayment $899',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            basic: {
                amount: '2,449',
                original: '3,059',
                features: [
                    '20% Discount',
                    'Monthly $244',
                    'For 10 months',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            }
        }
    },
    pound: {
        symbol: '£',
        plans: {
            premium: {
                amount: '1440',
                original: '1872',
                features: [
                    '25% Discount',
                    '100% Upfront',
                    'Course Switching Option',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            platinum: {
                amount: '1,728',
                original: '2,016',
                features: [
                    '20% Discount',
                    '40% Downpayment £691',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            },
            basic: {
                amount: '1,872',
                original: '2,199',
                features: [
                    '18% Discount.',
                    'Monthly £187',
                    'For 10 months',
                    'Customer Support on Priority',
                    'Email Support'
                ]
            }
        }
    }
};

let currentCurrency = 'rupee';

function toggleCurrency() {
    const buttonIcon = document.querySelector('.toggle-btn .icon');
    const planElements = document.querySelectorAll('.box');

    if (currentCurrency === 'rupee') {
        buttonIcon.classList.remove('bx-rupee');
        buttonIcon.classList.add('bx-dollar');
        updatePlanDetails(currencyData.dollar);
        currentCurrency = 'dollar';
    } else if (currentCurrency === 'dollar') {
        buttonIcon.classList.remove('bx-dollar');
        buttonIcon.classList.add('bx-pound');
        updatePlanDetails(currencyData.pound);
        currentCurrency = 'pound';
    } else {
        buttonIcon.classList.remove('bx-pound');
        buttonIcon.classList.add('bx-rupee');
        updatePlanDetails(currencyData.rupee);
        currentCurrency = 'rupee';
    }
}

function updatePlanDetails(currencyInfo) {
    const plans = currencyInfo.plans;
    const planNames = Object.keys(plans);

    planNames.forEach(planName => {
        const plan = plans[planName];
        const box = document.querySelector(`.box.${planName}`);
        const priceElement = box.querySelector('.price b');
        const originalPriceElement = box.querySelector('.price span');
        const featureElements = box.querySelectorAll('.features div');

        priceElement.textContent = `${currencyInfo.symbol}${plan.amount}`;
        originalPriceElement.textContent = `${currencyInfo.symbol}${plan.original}`;

        plan.features.forEach((feature, index) => {
            featureElements[index].textContent = feature;
        });
    });
}
