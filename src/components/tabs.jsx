import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Plants from './Plants';
import VegetableSeed from './VegetableSeed';
import AgroProducts from './AgroProducts';
import TeaProduct from './TeaProduct';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <section className='tab_items'>
                <div className='container'>
                    <div className='mb-3 ps-3'>
                        <h1 className='text-center'>Our Products</h1>
                    </div>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile aria-label="basic tabs example">
                                <Tab label="Plants" {...a11yProps(0)} />
                                <Tab label="Vegetable Seed" {...a11yProps(1)} />
                                <Tab label="Agro Products" {...a11yProps(2)} />
                                <Tab label="Tea Products" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Plants />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <VegetableSeed />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <AgroProducts />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <TeaProduct />
                        </TabPanel>
                    </Box>
                </div>
            </section>

        </>
    );
}