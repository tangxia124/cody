import type { ChatMessage } from '@sourcegraph/cody-shared'
import { Brain, MessageSquare, Search } from 'lucide-react'
import { Button } from '../../../../components/shadcn/ui/button'

interface SwitchIntentProps {
    intent: ChatMessage['intent']
    onSwitch?: () => void
}
export const SwitchIntent = ({ intent, onSwitch }: SwitchIntentProps) => {
    if (!['chat', 'search'].includes(intent || '')) {
        return null
    }

    return (
        <div className="tw-flex tw-justify-between tw-gap-4 tw-items-center">
            <div className="tw-flex tw-gap-2 tw-text-muted-foreground tw-items-center">
                <Brain className="tw-size-8" />
                Query review selected a {intent === 'search' ? 'code search' : 'chat'} response
            </div>
            <div className="tw-shrink-0 tw-self-start">
                <Button
                    size="sm"
                    variant="outline"
                    className="tw-text-prmary tw-flex tw-gap-2 tw-items-center"
                    onClick={onSwitch}
                >
                    {intent === 'search' ? (
                        <MessageSquare className="tw-size-8" />
                    ) : (
                        <Search className="tw-size-8" />
                    )}
                    {intent === 'search' ? 'Switch to chat' : 'Switch to search'}
                </Button>
            </div>
        </div>
    )
}
