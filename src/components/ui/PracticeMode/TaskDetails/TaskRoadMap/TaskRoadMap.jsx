import { Text, Card, Flex, Badge } from '@radix-ui/themes';
import { IconLink, IconRoute2 } from '@tabler/icons-react';

export const TaskRoadMap = () => {
    return (
        <div>
            <Flex direction={'column'} gap={'4'} my={'6'}>
                {stepdata.map((item) => (
                    <Card key={item.step}>
                        <Flex p={'4'} direction={'column'} gap={'4'}>
                            <Badge
                                color='yellow'
                                variant='surface'
                                radius='full'
                                style={{ width: 'fit-content' }}>
                                <Flex p={'1'} gap={'2'} align={'center'}>
                                    <IconRoute2 size={'15'} />
                                    {item.step}
                                </Flex>
                            </Badge>

                            <Text size={'3'} weight={'bold'}>
                                {item.title}
                            </Text>
                            <Text color='gray'>{item.description}</Text>

                            <Flex align={'center'} gap={'3'}>
                                <Text size={'2'}>Required URL fields : </Text>
                                {item.urls.map((url) => (
                                    <Badge radius='full' variant='surface' size={'3'} key={url}>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <IconLink size={'15'} />
                                            <Text>{url}</Text>
                                        </Flex>
                                    </Badge>
                                ))}
                            </Flex>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </div>
    );
};

const stepdata = [
    {
        step: '1',
        title: 'Setting IDE & Environment',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        ),
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    },
    {
        step: '2',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        ),
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    },
    {
        step: '3',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        ),
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    },
    {
        step: '4',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        ),
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    }
];
