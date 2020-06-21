import React from "react"
import { useInlineForm } from "react-tinacms-inline"
import { EditButton } from "./style"
import { useCMS } from "tinacms"

export function EditToggle() {
  const cms = useCMS()

  const { status } = useInlineForm()

  return (
    <EditButton
      onClick={() => {
        cms.enabled ? cms.disable() : cms.enable()
      }}
    >
      {cms.enabled ? "Preview" : "Edit"}
    </EditButton>
  )
}
