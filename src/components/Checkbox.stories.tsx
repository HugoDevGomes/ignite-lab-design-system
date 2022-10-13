import { Meta, StoryObj } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from "./Checkbox"
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2 text-gray-800'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )

        }
    ],
    } as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
