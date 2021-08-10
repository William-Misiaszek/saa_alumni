import React from "react";
import sanitize from "sanitize-html";

const searchAutocomplete = ({
  autocompleteSuggestions,
  showAutocomplete,
  onSelect,
  selectedSuggestion,
  setSelectedSuggestion,
  autocompleteContainerClasses,
  autocompleteLinkClasses,
  autocompleteLinkFocusClasses,
}) => (
  <div
    className={`${autocompleteContainerClasses}
    ${showAutocomplete && autocompleteSuggestions.length ? "" : "su-hidden"}`}
  >
    {Array.isArray(autocompleteSuggestions) && (
      <div className="su-list-unstyled" role="listbox">
        {autocompleteSuggestions.map((suggestion, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={`autocomplete-item-${suggestion.objectID}`}
            role="option"
            tabIndex={showAutocomplete ? 0 : -1}
            className={`su-mb-0
                        ${autocompleteLinkClasses}
                        ${
                          index === selectedSuggestion
                            ? autocompleteLinkFocusClasses
                            : ""
                        }
                      `}
            onClick={(e) => onSelect(e, suggestion.query)}
            onKeyDown={(e) => {
              // On Enter or Spacebar
              if (e.key === "Enter" || e.key === " ") {
                onSelect(e, suggestion.query);
              }
            }}
            onFocus={(e) => setSelectedSuggestion(index)}
            aria-selected={selectedSuggestion === index ? "true" : "false"}
            id="search-autocomplete-listbox"
          >
            {
              // eslint-disable-next-line no-underscore-dangle
              suggestion._highlightResult && (
                <span
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: sanitize(
                      // eslint-disable-next-line no-underscore-dangle
                      suggestion._highlightResult.query.value
                    ),
                  }}
                />
              )
            }
          </div>
        ))}
      </div>
    )}
  </div>
);

export default searchAutocomplete;