"use client"

import { FC } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog'

interface ModalProps {
    children: React.ReactNode
    title: string
    description: string
    isOpen: boolean
    onClose: () => void
}

const Modal: FC<ModalProps> = ({ title, children, description, isOpen, onClose }) => {
    const onChange = (open: boolean) => { 
        if (!open) {
            onClose()
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    <DialogHeader>
                        <div>
                            {children}
                        </div>
                    </DialogHeader>
                </DialogHeader>
                
            </DialogContent>
        </Dialog>
    )
}

export default Modal