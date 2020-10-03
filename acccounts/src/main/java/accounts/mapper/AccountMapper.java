package accounts.mapper;

import accounts.domain.Account;
import accounts.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AccountMapper {

    public List<AccountDto> mapToDtoList(List<Account> accounts) {
        return accounts.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public AccountDto mapToDto(Account account) {
        return AccountDto.builder()
                .id(account.getId())
                .name(account.getName())
                .availableFunds(account.getAvailableFunds())
                .currency(account.getCurrency())
                .customerId(account.getCustomerId())
                .build();
    }
}

