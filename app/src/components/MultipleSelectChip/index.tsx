import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { useState, useEffect } from 'react'
import { getAllowedValues } from '../../actions/case'
import { ProjectStore } from '../../store/mobx'
import { FocusConfig } from '../DocumentDataSection/model'
import TextField from '@mui/material/TextField'
import InputWithLabel from '../InputWithLabel'

export default function MultipleSelectChip({
  propKey,
  typeAheadName,
  inputMeta,
  verbose,
  setFocus
}: {
  propKey: string
  typeAheadName: string
  inputMeta: any
  verbose: boolean
  setFocus: (payload: string | FocusConfig) => void
}) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const { selectedProject, updateProject } = ProjectStore
  const [onOpen, setOnOpen] = useState(false)

  useEffect(() => {
    getAllowedValues(typeAheadName).then((res) => {
      setSuggestions(res)
    })
  }, [])

  return (
    <Autocomplete
      sx={{
        width: '100%',
        '& .MuiInputBase-root': {
          height: 'auto'
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#b7bac6'
          }
        }
      }}
      multiple
      id="tags-outlined"
      options={suggestions}
      onChange={async (_, value) => {
        await updateProject({
          [propKey]: {
            ...selectedProject[propKey],
            values: value
          }
        })
      }}
      onOpen={() => setOnOpen(true)}
      size="small"
      value={selectedProject[propKey].values || []}
      filterSelectedOptions
      renderInput={(params) => (
        <>
          <InputWithLabel
            customStyle={{ fontSize: 11, textTransform: 'capitalize' }}
            title={inputMeta.label.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}
          >
            <TextField
              {...params}
              onFocus={() => verbose && setFocus(propKey)}
              label={onOpen ? ' ' : 'Please insert data here'}
              InputLabelProps={{
                style: {
                  fontSize: '12px',
                  marginTop: '3px',
                  color: 'grey'
                },
                shrink: false
              }}
            />
          </InputWithLabel>
        </>
      )}
    />
  )
}
